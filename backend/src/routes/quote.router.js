const { Router } = require('express');
const router = Router();
const { getQuote } = require('../controllers/quote.controller');

router.route('/:idd')
    .get(getQuote)

module.exports = router;