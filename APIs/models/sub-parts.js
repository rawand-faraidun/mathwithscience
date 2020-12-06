//jshint esversion:6


/* 
SUB PARTS are the sub-branches of a PART
like {Linear Equation, Cubic Equation, Quadratic Equation} are SUB PARTS of EQUATION SOLVER
and EQUATION SOLVER is a PART of ALGEBRA


BRANCH:
    -PART
    -PART:
        -SUBPART
        -SUBPART
    -PART
 */


const mongoose = require("mongoose");

//name: name of the Part (Sub-Part)
//description: description of the part (Sub-Part)
//partID: id of the Part that the Sub-Part belongs To

const subPartsSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    partID: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('subparts', subPartsSchema);


//adding sub-parts
/* 
Parts.findOne({ name: "Equation Solver" }, (err, found) => {
    console.log(found);

    var arr = [
        { name: 'Linear Equation', description: "ax+b=0", partID: found._id },
        { name: 'Quadratic Equation', description: "ax''2''+bx+c=0", partID: found._id },
        { name: 'Cubic Equation', description: "ax''3''+bx''2''+cx+d=0", partID: found._id },
    ];

    subParts.insertMany(arr, function (error, docs) { console.log(docs); });

});
 */