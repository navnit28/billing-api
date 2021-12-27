// const redis = require('ioredis');
// const redisClient = redis.createClient();
const RedisHelper = require('../helper/redisHelper');
exports.getBillingInformation=async(req,res)=>{
    // const userId=req.body.userId;
    // const month=req.body.month;
    // const year=req.body.year;
    // const key=`${userId}_${month}_${year}_api_calls_count`;
    // const total_key=`${userId}_${month}_${year}_api_cost_total`;
    // const count=await redisClient.get(key);
    // const total_bill=await redisClient.get(total_key);
    // res.json({
    //     message:'Billing Information',
    //     count:count?count:0,
    //     total_bill:total_bill?total_bill:0
    // });
    const response=await RedisHelper.getBillingInformation(req);
    res.json(response);
};