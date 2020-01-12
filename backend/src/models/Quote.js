const { Schema, model } = require('mongoose');



const TuristPlansSchema = new Schema({
    name: String,
    imagen:String,
    duration: String,
    price: String,
    quotas: String
});

const HotelPlansSchema = new Schema({
    type: String,
    price: String
});

const FlightPriceSchema = new Schema({
    class: String,
    price: String
});


const QuoteSchema = new Schema({
    id: Number,
    destination: String,
    touristPlans: [TuristPlansSchema],
    flightPrice: [FlightPriceSchema],
    hotelPlans: [HotelPlansSchema],

    // mes: Number,
    // week: Number
})


module.exports = model('Quote', QuoteSchema);
// module.exports = model('TuristPlans', TuristPlansSchema);
// module.exports = model('Quote', QuoteSchema);
