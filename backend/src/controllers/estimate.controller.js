const estimateCtrl = {};
const Estimate = require('../models/Estimate');
const FlightPlan = require('../models/FlightPlan');
const Extra = require('../models/Extra');
const HotelPlan = require('../models/HotelPlan');
const ComboPlan = require('../models/ComboPlan');

estimateCtrl.getEstimates = async (req, res) => {
    try {
        const estimates = await Estimate.find();
        res.json(estimates)

    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

estimateCtrl.createEstimate = async (req, res) => {
    try {
        const  destination  = req.body.destination;
        console.log(`typeOf : ${typeof(destination)}`);
        const { flightClass,
            flightPrice,
            hotelPlan,
            hotelPrice,
            flight_id,
            exta,
            departureDate,
            returnDate,
            totalTuristPlan,
            total,
            turistPlans } = req.body;
        const newEstimate = new Estimate(
            destination,
            flightClass,
            flightPrice,
            hotelPlan,
            hotelPrice,
            flight_id,
            exta,
            departureDate,
            returnDate,
            totalTuristPlan,
            total,
            turistPlans
        )
        await newEstimate.save();


    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
}











// estimateCtrl.createEstimate = async (req, res) => {
//     try {
//         const { flightPlan_id } = req.body;
//         var flightPlan = await FlightPlan.findOne({ '_id': flightPlan_id });
//         console.log(`flightPlan: ${flightPlan}`);
//         console.log(`flight price: ${flightPlan.price}`);
//         console.log(`${typeof (flightPlan)}`);
//         const { id, id_destination, destination, plan, price } = flightPlan;
//         console.log(`${flightPlan.id_destination}`);
//         console.log(`destination : ${destination}`);
//         const newFlightPlan = new FlightPlan({
//             id,
//             id_destination,
//             destination,
//             plan,
//             price
//         })
//         console.log(`getFlightPlan : ${newFlightPlan.destination}`);
//         if (flightPlan) {
//             const newEstimate = new Estimate({
//                 priceFlight: newFlightPlan
//             });
//             await newEstimate.save();
//             res.json('Cotización creada');
//         }

//     } catch (e) {
//         console.log(e)
//         res.json(e.errmsg);
//     }
// }

estimateCtrl.createEstimate2 = (req, res) => {


}



function getFlightPlan(id) {
    return new Promise(function (resolve, reject) {
        let flightprice = FlightPlan.find({ 'id': id });
        resolve(flightprice);
    })

}

// try {
//     const flightP = await FlightPlan.find({ flightPlan_id });
//     return flightP;
// } catch (error) {
//     res.status(400).json({
//         error:error
//     })
// }



module.exports = estimateCtrl;