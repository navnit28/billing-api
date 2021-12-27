const RedisHelper = require('../helper/redisHelper');
exports.getBillingInformation=async(req,res)=>{
    const response=await RedisHelper.getBillingInformation(req);
    res.json(response);
};