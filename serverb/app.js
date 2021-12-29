const express = require('express');
const app = express();
var proxy = require('express-http-proxy');
const Queue=require('bull');
const BillingQueue=new Queue('BillingQueue');
app.use(express.json());
const billing=require('./routes/billingRoute');
app.use("/external/*",proxy('http://localhost:3000',{
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
       // proxyReqOpts.headers['x-forwarded-host'] = srcReq.headers.host;
        return proxyReqOpts;
    },
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
        if(proxyRes.statusCode=="200"){
            const data=proxyRes;
            BillingQueue.add(data.headers,{})
        }
        return proxyResData;
    }
}));
app.use("/billing",billing)
module.exports = app;