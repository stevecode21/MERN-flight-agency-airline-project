const { Router } = require('express');
const router = Router();
const { createEstimate, getEstimates } = require('../controllers/estimate.controller');

router.route('/')
    .get(getEstimates)
    .post(createEstimate);

module.exports = router;