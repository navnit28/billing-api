const BillingHandler=require('../helpers/billingQueue');
exports.pingController=async(req,res)=>{
    //console.log(req.body.userId);
    if(!req.body.userId){
        return res.status(400).send({
            message:"userId is required"
        });
    }
    await BillingHandler.addToQueue(req.body.userId,new Date());
    res.status(200).json({
        message:"Hello world"
    });
};