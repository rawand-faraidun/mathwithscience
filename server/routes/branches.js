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

    try {
        // getting branches
        var branches = await Branches.find({}, { _id: false, __v: false });

        res.status(200).send(branches);

    }
    catch (err) {
        console.log('GET:  /api/branches  - error');
        console.log(err);
        res.status(404).send(err);
    }


});





//exporting routes
module.exports = router;
