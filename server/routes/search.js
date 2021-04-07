//jshint esversion:9

//setting requirments
const express = require("express");

// setting router
const router = express.Router();





/**
 * @param {req.body} : 
 *      { searchText } is the search key
 *      { limit } sets limit of how many result come back
 * 
 * @param {res} : responds with array of branch and calculators
 */
router.post("/", (req, res) => {
    console.log(req.body);

    res.status(200).send([]);
    res.end();
});





//exporting routes
module.exports = router;
