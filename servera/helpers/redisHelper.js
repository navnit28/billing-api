const redis=require('ioredis');
const redisClient=new redis();
const api_rate=0.2;
class RedisHelper{
    static async addToRedis(job){
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
    }
}
module.exports=RedisHelper;