
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        }, 
        mail: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }, 
        password: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        miles: {
            type: Number,
            required: false,
            unique: false,
            trim: true
        }
    }, {
        timestamps: true
});
userSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};

module.exports = model('User', userSchema);