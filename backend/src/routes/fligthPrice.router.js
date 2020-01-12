const { Router } = require('express');
const router = Router();
const { getFlightPrice, getFlightPrices } = require('../controllers/flightPrice.controller');

router.route('/')
    .get(getFlightPrices)

router.route('/:id_destination')
    .get(getFlightPrice)

module.exports = router;