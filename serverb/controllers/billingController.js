const redis = require('ioredis');
const redisClient = redis.createClient();
exports.getBillingInformation=async(req,res)=>{
    const userId=req.body.userId;
    const month=12
    const year=2021;
    const key=`${userId}_${month}_${year}_api_calls_count`;
    const total_key=`${userId}_${month}_${year}_api_cost_total`;
    const count=await redisClient.get(key);
    const total_bill=await redisClient.get(total_key);
    res.json({
        message:'Billing Information',
        count:count,
        total_bill:total_bill
    });
};