const { Router } = require('express');
const router = Router();
const { getTouristPlans, getTouristPlan } = require('../controllers/touristPlan.controller');

router.route('/')
    .get(getTouristPlans)

router.route('/:id_destination')
    .get(getTouristPlan)

module.exports = router;