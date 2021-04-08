//jshint esversion:9

//setting requirments
const express = require("express");

// getting model
const Branches = require('../models/Branches');
const Calculators = require('../models/Calculators');

// setting router
const router = express.Router();




/**
 * @param {req.params} : 
 *      { language } determines to return details in which language
 *      { limit } OPTIONAL sets limit to retuning calculators
 * 
 * @param {res} : responds with array of calculators
 */
router.get("/all/:language/:limit?", async (req, res) => {

    try {
        // getting all calculators
        // it will get { urlName, specified language details } of all calculators and sort them by visitCount (DESC: big to small) then by their name (ASC)
        var calculator = await Calculators.find(
            {},
            { _id: false, urlName: true, [req.params.language]: true }
        )
            .sort({ visitCount: -1, 'en.name': 1 })
            .limit(req.params.limit ? +req.params.limit : '') // if limit parameter excists, then adding limit to returning calculators
            .lean();

        res.status(200).send(calculator);

    }
    catch (err) {
        console.log('GET:  /api/calculators/all/:language  - error');
        console.log(err.message);
        res.status(404).send(err);
    }


});

/* 
// this can be used to add a new calculator

var branches = await Branches.find({}, { _id: true, urlName: true, [req.params.language]: true }).sort({ visitCount: -1, 'en.name': 1 }).lean();


Calculators.insertMany([
    {
        branchID: branches[0]._id,
        en: {
            name: 'Proportion Ratio',
            description: 'Proportion Ratio states that two fractions on each side of an equation are equal.'
        },
        kr: {
            name: 'ڕێژەی تێکڕا',
            description: 'ڕێژەی تێکڕا پشتڕاست دەکاتەوە کە دوو کەرت لە هەردوولای هاوکێشەیەک یەکسانن'
        },
        keywords: ['proportion ratio'],
        urlName: 'proportion-ratio',
        visitCount: 0,
    }
], (err, docs) => {
    console.log(docs);
});
*/





//exporting routes
module.exports = router;
