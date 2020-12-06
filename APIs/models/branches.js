//jshint esversion:6


/* 
BRANCHES are the family of the calculators
like ALGEBRA is the BRANCH and {Proportion Ratio, Equation Solver, Decimal Fraction, Prime Checker} are its PART
and they are the PARTS of ALGEBRA
 */


const mongoose = require("mongoose");

//name: name of the Branch
//decription: description of the Branch

const branchesSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
});


module.exports = mongoose.model('branches', branchesSchema);





/* 
// All Initial Calculators

var arr = [
    { name: 'Algebra', description: 'use Proportion/Ratio, Equation Solver and more from Algebra.' },
    { name: 'Geometry', description: 'Get Area, Diameter, Volume, and many more Geometry equations.' },
    { name: 'Unit Conversion', description: 'Convert many units like Weight, Volume, Power, Area, Length, and many more.' },
    { name: 'Health', description: 'Get Body Mass Index.' },
    { name: 'Miscellaneous', description: 'Get Age from a date, difference from two times' },
    { name: 'Matrices', description: 'Cooming Soon*' },
    { name: 'Finance', description: 'Cooming Soon*' }
];

Branches.insertMany(arr, function (error, docs) { console.log(docs); });
 */