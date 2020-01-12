const quoteCtrl ={};
const Quote = require('../models/Quote');

quoteCtrl.getQuote = async (req,res)=>{
    try {
        console.log(`${req.params.idd}`);
        const quote = await Quote.find({'id':req.params.idd});
        res.json(quote);
    } catch (err) {
        res.status(400).json({
            error:err
        })
    }
}

module.exports=quoteCtrl;