const { Schema, model } = require('mongoose');

const hotelPlanShema = new Schema({
    id_destination: String,
    destination: String,
    type: String,
    price: String
})

module.exports = model('HotelPlan', hotelPlanShema);