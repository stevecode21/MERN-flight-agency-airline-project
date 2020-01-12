const destinationCtrl = {};
const Destination = require('../models/Destination')

destinationCtrl.getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);

    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
};
module.exports = destinationCtrl;
