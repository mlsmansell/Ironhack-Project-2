const mongoose = require("mongoose")
const Schema = mongoose.Schema
const clientSchema = new Schema({

    role: {
        type: String,
        enum: ['Admin', 'Partner', 'Client'],
        default: 'Client'
    },

    email: {
        type: String,
        validate: {
            validator: text => text.endsWith('.com'),
            message: 'Use a valid mail'
        }
    },

    username: {
        type: String,
    },

    password: {
        type: String,
    },

    name: {
        type: String,
    },

    surname: {
        type: String,
    },


    id: {
        type: String,
    },


    creditcard: {
        type: Number,
    },


    cif: {
        type: String,
    },

    fiscalName: {
        type: String,
    },

    direction: {
        type: String,
    },

}, {
    timestamps: true,
})



const Client = mongoose.model('Client', clientSchema)

module.exports = Client