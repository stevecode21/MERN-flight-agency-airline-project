const { Schema, model } = require('mongoose');

const ComboPlansSchema = new Schema({
    destination: String,
    destination_id: String,
    name: String,
    description: String,
    quotas: String,
    price: Number
})

module.exports = model('ComboPlan', ComboPlansSchema);

