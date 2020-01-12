const hotelPlanCtrl={};
const HotelPlan = require('../models/HotelPlan');

hotelPlanCtrl.getHotelPlans = async (req,res)=>{
    try {
        const hotelPrices = await HotelPlan.find();
        res.json(hotelPrices);
    } catch (error) {
        res.status(400).json({
            error: error
        })

    }
}

hotelPlanCtrl.getHotelPlan = async (req,res)=>{
    try {
        console.log(`req.params.id_destination : ${req.params.id_destination}`);
        const hotelPrice = await HotelPlan.find({ "id_destination": req.params.id_destination });
        res.json(hotelPrice);
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

module.exports=hotelPlanCtrl;
