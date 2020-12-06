//jshint esversion:6


/* 
CREATORS are the people that worked in this project
 */


const mongoose = require("mongoose");

//name: name of the Creator
//work: creator's work
//workPlace: creator's work place
//socials: creator's social medias

const creatorsSchema = mongoose.Schema({
    name: { type: String, required: true },
    work: { type: String, required: true },
    workingPlace: { type: String, required: true },
    socials: { type: Array, required: true }
});


module.exports = mongoose.model('creator', creatorsSchema);





/* 
// All Initial Calculators

var arr = [
    {
        name: 'Mhamad Rzgar',
        work: 'Programmer',
        workingPlace: 'Computer Science Student',
        socials: [
            "https://www.facebook.com/mhamadplay4",
            "https://www.instagram.com/mhamad_rzgar4/"
        ]
    }
];

Creators.insertMany(arr, function (error, docs) { console.log(docs); });
 */