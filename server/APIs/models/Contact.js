//jshint esversion:10

const mongoose = require("mongoose")


// orders schema
const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        maxLength: 50
    },
    cause: {
        type: String,
        required: true,
        maxLength: 50
    },
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    description: {
        type: String,
        required: true,
        maxLength: 255
    },
})



module.exports = mongoose.model('contact', orderSchema)