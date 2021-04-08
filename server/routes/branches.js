//jshint esversion:9

//setting requirments
const express = require("express");

// getting model
const Branches = require('../models/Branches');

// setting router
const router = express.Router();




/**
 * @param {req.params} : 
 *      { language } determines to return details in which language
 * 
 * @param {res} : responds with array of branches
 */
router.get("/:language", async (req, res) => {

    try {
        // getting all branches
        // it will get { urlName, specified language details } of all branches and sort them by visitCount (DESC: big to small) then by their name (ASC)
        var branches = await Branches.find({}, { _id: false, urlName: true, [req.params.language]: true }).sort({ visitCount: -1, 'en.name': 1 }).lean();

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
