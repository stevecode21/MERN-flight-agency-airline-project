const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const ExtraSchema = new Schema({
    month: String,
    increment: Number
})

module.exports = model('Extra', ExtraSchema);

