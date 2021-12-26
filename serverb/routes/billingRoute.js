const express = require('express');
const {getBillingInformation} = require('../controllers/billingController');
const router = express.Router();
router.route('/').get(getBillingInformation);
module.exports = router;