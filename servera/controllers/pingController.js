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
    res.setHeader('month',month);
    res.setHeader('year', year);
    res.setHeader('userid',userid);
    res.status(200).json({
        message:"Hello world"
    });
};