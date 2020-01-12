const { Schema, model } = require('mongoose');


const FlightPlansSchema = new Schema({
    id_destination: String,
    destination: String,
    plan: String,
    price: String
})

FlightPlansSchema.static('findFlightPlan', function (id) {
    return this.find({ id });

})

module.exports = model('FlightPlan', FlightPlansSchema);
