//jshint esversion:6


/* 
REPORTS & FEEDBACKS Page
 */


const mongoose = require("mongoose");

//email: senders email
//title: report or feedback title
//type: choose if it is report or feedback
//name: senders name
//description: report or feedback description

/* NAME & DESCRIPTION can be UNFILLED */

const reportSchema = mongoose.Schema({
    email: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    name: String,
    description: String
});

module.exports = mongoose.model('contact', reportSchema);