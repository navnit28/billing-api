const express = require('express');
const app = express();
var proxy = require('express-http-proxy');
app.use(express.json());
const billing=require('./routes/billingRoute');
app.use("/external/*",proxy('http://localhost:3000'));
app.use("/billing",billing)
module.exports = app;