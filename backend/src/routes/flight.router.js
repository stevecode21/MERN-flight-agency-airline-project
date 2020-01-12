const { Router } = require('express');
const router = Router();

const { getFlights,createFlight, deleteFlight } = require('../controllers/flight.controller')

router.route('/')
    .get(getFlights)
    .post(createFlight);
    
router.route('/:id')
    .delete(deleteFlight);

module.exports = router;