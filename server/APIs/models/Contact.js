//jshint esversion:10

const mongoose = require("mongoose")


// orders schema
const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        maxLength: 50
    },
    cause: {
        type: String,
        maxLength: 50
    },
    title: {
        type: String,
        maxLength: 100
    },
    description: {
        type: String,
        maxLength: 255
    },
})



module.exports = mongoose.model('contact', orderSchema)