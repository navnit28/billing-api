const Queue=require('bull');
const BillingQueue=new Queue('billingQueue','redis://127.0.0.1:6379');
const redis=require('ioredis');
const redisClient=new redis('redis://127.0.0.1:6379');
const api_rate=0.2;
class BillingHandler{
    static async addToQueue(userId,date){
       BillingQueue.add({
              userId:userId,
                date:date
        },{
            removeOnComplete:true,
        });
    }
    static async processQueue(){
        BillingQueue.process(async(job)=>{
            console.log(job.data.userId);
            console.log(job.data.date);
            const userId=job.data.userId;
            const year=job.data.date.toString().split('-')[0];
            const month=job.data.date.toString().split('-')[1];
            const key=`${userId}_${month}_${year}_api_calls_count`;
            const cost_key=`${userId}_${month}_${year}_api_cost_total`;
            console.log(key);
            const apiCallsCount=await redisClient.get(key);
            const apiCostTotal=await redisClient.get(cost_key);
            console.log(apiCallsCount);
            console.log(apiCostTotal);
            if(apiCallsCount){
                await redisClient.incr(key);
                await redisClient.incrbyfloat(cost_key,api_rate);
            }
            else{
                await redisClient.set(key,1);
                await redisClient.set(cost_key,api_rate);
            }
            job.progress(100);
            // const key=`${userId}`
            // await redisClient.set(job.data.userId,5);
        });
    }
}
module.exports=BillingHandler;
