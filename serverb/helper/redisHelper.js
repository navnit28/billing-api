const redis=require('ioredis');
const redisClient=redis.createClient();
class RedisHelper{
    static async getBillingInformation(req){
        const userId=req.body.userId;
        const month=req.body.month;
        const year=req.body.year;
        const key=`${userId}_${month}_${year}_api_calls_count`;
        const total_key=`${userId}_${month}_${year}_api_cost_total`;
        const count=await redisClient.get(key);
        const total_bill=await redisClient.get(total_key);
        const response={
            message:'Billing Information',
            count:count?count:0,
            total_bill:total_bill?total_bill:0
        }
        return response;
    }
}
module.exports=RedisHelper;