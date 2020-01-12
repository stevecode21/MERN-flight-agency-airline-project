const flightPriceCtrl = {};
const FlightPlan = require('../models/FlightPlan');

flightPriceCtrl.getFlightPrices = async (req, res) => {
    try {
        const flightPrices = await FlightPlan.find();
        res.json(flightPrices);
    } catch (error) {
        res.status(400).json({
            error: error
        })

    }
}

flightPriceCtrl.getFlightPrice = async (req, res) => {
    try {
        console.log(`req.params.id_destination : ${req.params.id_destination}`);
        const flightprice = await FlightPlan.find({ "id_destination": req.params.id_destination });
        res.json(flightprice);
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

module.exports = flightPriceCtrl;