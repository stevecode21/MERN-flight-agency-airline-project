const extraCtrl = {};
const Extra = require('../models/Extra');

extraCtrl.getExtras = async (req, res) => {
    try {
        const extras = await Extra.find();
        res.json(extras);

    } catch (error) {
        res.status(400).json({
            error: error
        })

    }

};

extraCtrl.getIncrement = async (req, res) => {
    const  month  = req.params.month;
    try {
        const increment = await Extra.find({ 'month': month });
        if (increment) {
            console.log(`${increment}`);
            res.json(increment);
        }


    } catch (error) {
        res.status(400).json({
            error: err
        });

    }

}
module.exports = extraCtrl;