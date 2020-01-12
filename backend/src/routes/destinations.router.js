const { Router } = require('express');
const router = Router();
const { getDestinations } = require('../controllers/destination.controller');

router.route('/')
    .get(getDestinations);

module.exports = router;


