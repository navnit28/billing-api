const express=require('express');
const { pingController } = require('../controllers/pingController');
const router = express.Router();

router.route('/').get(pingController);
module.exports = router;