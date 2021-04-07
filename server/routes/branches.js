//jshint esversion:9

//setting requirments
const express = require("express");

// getting model
const Branches = require('../models/Branches');

// setting router
const router = express.Router();





/**
 * @param {res} : responds with array of branches
 */
router.get("/", async (req, res) => {

    // getting branches
    var branches = await Branches.find({}, { _id: false, __v: false });

    // sending response
    res.status(200).send(branches);
    res.end();
});





//exporting routes
module.exports = router;
