const { Router } = require('express');
const router = Router();
const { getHotelPlan, getHotelPlans } = require('../controllers/hotelPlan.controller');

router.route('/')
    .get(getHotelPlans)

router.route('/:id_destination')
    .get(getHotelPlan)

module.exports = router;