const touristPlanCtrl = {};
const TouristPlan = require('../models/TouristPlan');

touristPlanCtrl.getTouristPlans = async (req, res) => {
    try {
        const touristPlans = await TouristPlan.find();
        res.json(touristPlans);
    } catch (error) {
        res.status(400).json({
            error: error
        })

    }
}

touristPlanCtrl.getTouristPlan = async (req, res) => {
    try {
        console.log(`req.params.id_destination : ${req.params.id_destination}`);
        const touristPlan = await TouristPlan.find({ "id_destination": req.params.id_destination });
        res.json(touristPlan);
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

module.exports = touristPlanCtrl;