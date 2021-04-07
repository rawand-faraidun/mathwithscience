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
    Branches.find({}, { _id: false, __v: false }, (error, branches) => {
        if (error) {
            console.log('GET:  /api/branches  - error');
            console.log(error);
            res.status(404).send(error);
        }
        else {
            // sending response
            res.status(200).send(branches);
        }
    });

});





//exporting routes
module.exports = router;
