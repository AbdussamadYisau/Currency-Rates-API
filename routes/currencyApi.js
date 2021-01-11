const express = require('express');

const currencyController = require('../controllers/currencyApi');

const router = express.Router();


// GET /api/rates
router.get('/api/rates', currencyController.getCurrency);


module.exports = router;