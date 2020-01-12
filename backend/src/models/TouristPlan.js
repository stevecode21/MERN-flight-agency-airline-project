const { Schema, model } = require('mongoose');

const touristPlansSchema = new Schema({
    id_destination: String,
    destination: String,
    name: String,
    url:String,
    duration: String,
    price: String,
    quotas: String,
    description:String
});

module.exports = model('TouristPlan', touristPlansSchema);
