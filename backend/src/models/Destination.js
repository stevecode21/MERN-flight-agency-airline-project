const { Schema, model } = require('mongoose');

const destinationSchema = new Schema({
    name: String,
    img:"",
    millas: String,
    kilometers: String,
    duration: String,
    airport: String,
    arrivalCyty:String,
    timeDiferent: String,
    menuHotel:[],
    showHotel:[]
  
});

module.exports = model('Destination', destinationSchema);