
const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
        code: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }, 
        departureMonth: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }, 
        departureDate: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        departureDay: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        arrivalDate: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        arrivalDay: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        destination: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        seatsFirstClass: {
            type: [Boolean],
            required: false,
            unique: false,
            trim: true
        }
        ,
        seatsExecutiveClass: {
            type: [Boolean],
            required: false,
            unique: false,
            trim: true
        }
        ,
        seatsEconomicClass: {
            type: [Boolean],
            required: false,
            unique: false,
            trim: true
        }
        ,
        seatsTouristClass: {
            type: [Boolean],
            required: false,
            unique: false,
            trim: true
        }
    }, {
        timestamps: true
});


module.exports = model('Flight', flightSchema);