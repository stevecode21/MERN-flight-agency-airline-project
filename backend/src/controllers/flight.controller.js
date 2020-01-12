const flightCtrl = {};

const Flight = require('../models/Flight');



flightCtrl.getFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

flightCtrl.createFlight = async (req, res) => {
    console.log("req.body");
    console.log(req.body);

    try {
        // const { name } = req.body;
        // const { mail } = req.body;
        // const { password } = req.body;
        // const  miles = 0;
        const { code } = req.body;
        const { departureMonth } = req.body;
        const { departureDate } = req.body;
        const { departureDay } = req.body;
        const { arrivalDate } = req.body;
        const { arrivalDay } = req.body;
        const { destination } = req.body;



        const  seatsFirstClass = new Array(47).fill(false);
        const  seatsExecutiveClass = new Array(93).fill(false);
        const  seatsEconomicClass = new Array(187).fill(false);
        const  seatsTouristClass = new Array(140).fill(false);


        const newFlight = new Flight({ code, departureMonth, departureDate, departureDay,  arrivalDate, arrivalDay, destination, seatsFirstClass, seatsExecutiveClass, seatsEconomicClass, seatsTouristClass});
        // const newFlight = new Flight({
        //     _id: mongoose.Types.ObjectId(),
        //     code: req.body.code,
        //     departureMonth: req.body.departureMonth,
        //     departureDate: req.body.departureDate,
        //     departureDay: req.body.departureDay,
        //     arrivalDate: req.body.arrivalDate,
        //     arrivalDay: req.body.arrivalDay,
        //     destination: req.body.destination,
        //     seats: new Array(467).fill(false)
        // });
        console.log("newFlight");
        console.log(newFlight);
        await newFlight.save();
        res.json('newFlight created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

flightCtrl.deleteFlight = async (req, res) => {
    const { id } = req.params;
    await Flight.findByIdAndDelete(id);
    res.json('Flight deleted');
};


module.exports = flightCtrl;