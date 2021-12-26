exports.pingController=(req,res)=>{
    //console.log(req.body.userId);
    if(!req.body.userId){
        return res.status(400).send({
            message:"userId is required"
        });
    }
    res.status(200).json({
        message:"Hello world"
    });
};