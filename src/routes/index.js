const express = require('express');
const exampleController = require('../controllers/exampleController');
const paypalAuthController = require('../controllers/paypalAuthController');
const paypalPayoutController = require('../controllers/paypalPayoutController');
const router = express.Router();

router.get('/example', exampleController.getExample);
router.get('/auth', paypalAuthController.fetchAuthToken);
router.get('/payout', paypalPayoutController.payout);

module.exports = router;
