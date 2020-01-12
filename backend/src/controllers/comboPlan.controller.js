comboCtrl = {};
const ComboPlan = require('../models/ComboPlan');

comboCtrl.getPackage = async (req, res) => {
    const { destination } = req.body;
    try {
        const packagePlan = await ComboPlan.find({ 'destination': destination })
        res.json(packagePlan);

    } catch (error) {
        res.status(400).json({
            error: error
        });

    }

}
comboCtrl.getPackages = async (req, res) => {
    try {
        const packagePlans = await ComboPlan.find();
        res.json(packagePlans);
        console.log(`packagePlans : ${packagePlans}`);

    } catch (error) {
        res.status(400).json({
            error: error
        });

    }

}

module.exports = comboCtrl;