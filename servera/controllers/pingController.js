const BillingHandler=require('../helpers/billingQueue');
exports.pingController=async(req,res)=>{
    //console.log(req.body.userId);
    // if(!req.body.userId){
    //     return res.status(400).send({
    //         message:"userId is required"
    //     });
    // }
    //await BillingHandler.addToQueue(req.body.userId,new Date());
    const {userid}=req.headers;
    const date=new Date();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    res.status(200).json({
        headers:{userid,month,year},
        message:"Hello world"
    });
};