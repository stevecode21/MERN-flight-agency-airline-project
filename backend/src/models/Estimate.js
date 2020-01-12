const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const FlightPlan = require('./FlightPlan').schema;
const HotelPlan = require('./HotelPlan').schema;
// const TuristPlan = require('./TouristPlan');

const TuristPlan = new Schema({
    id_destination: String,
    url: String,
    destination: String,
    name: String,
    duration: String,
    price: Number,
    quotes: String,
    description: String
})

const EstimateSchema = new Schema({
    destination: String,
    flightClass: String,
    flightPrice: Number,
    hotelPlan: String,
    hotelPrice: Number,
    flight_id: String,
    exta: Number,
    departureDate: String,
    returnDate: String,
    totalTuristPlan: Number,
    total: Number,
    turistPlans: [TuristPlan]

})

module.exports = model('Estimate', EstimateSchema);
