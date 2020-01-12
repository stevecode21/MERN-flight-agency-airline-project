const { Router } = require('express');
const router = Router();
const { getExtras, getIncrement } = require('../controllers/extra.controller');

router.route('/')
    .get(getExtras)
router.route('/:month')
    .get(getIncrement)
    



module.exports = router;