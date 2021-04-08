//jshint esversion:9

//setting requirments
const express = require("express");

// getting model
const Branches = require('../models/Branches');

// setting router
const router = express.Router();





/**
 * @param {req.body} : 
 *      { searchText } is the search key
 *      { limit } sets limit of how many result come back
 *      { language } determines to return which language
 * 
 * @param {res} : responds with array of branch and calculators
 */
router.post("/", async (req, res) => {

    try {
        // finding branches
        // the search is based on Title, Description or keywords include the search text
        // it will get { urlName, specified language details } of all branches and sort them by visitCount (DESC: big to small) then by their name (ASC)
        var branches = await Branches.find({
            $or: [
                { 'en.name': new RegExp(req.body.searchText) },
                { 'en.description': new RegExp(req.body.searchText) },
                { 'kr.name': new RegExp(req.body.searchText) },
                { 'kr.description': new RegExp(req.body.searchText) },
                { keywords: { $in: new RegExp(req.body.searchText) } }
            ]
        }, { _id: false, urlName: true, [req.body.language]: true }).sort({ visitCount: -1, 'en.name': 1 }).lean();

        /** 
         * @TODO : add parts to search also
        */

        // sending the search result
        res.status(200).send(branches);

    }
    catch (err) {
        console.log('POST:  /api/search  - error');
        console.log(err);
        res.status(404).send(err);
    }

});





//exporting routes
module.exports = router;
