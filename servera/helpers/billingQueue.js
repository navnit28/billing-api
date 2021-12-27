const Queue=require('bull');
const BillingQueue=new Queue('billingQueue','redis://127.0.0.1:6379');
// const redis=require('ioredis');
// const redisClient=new redis('redis://127.0.0.1:6379');
// const api_rate=0.2;
const RedisHelper=require('./redisHelper');
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
            await RedisHelper.addToRedis(job);
            job.progress(100);
        });
    }
}
module.exports=BillingHandler;
