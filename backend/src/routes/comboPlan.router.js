const { Router } = require('express');
const router = Router();
const { getPackage, getPackages } = require('../controllers/comboPlan.controller');

router.route('/')
    .get(getPackages)

router.route('/:destination')
    .get(getPackage)

module.exports = router;