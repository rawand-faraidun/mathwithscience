//jshint esversion:6


/* 
PARTS are the sub-branches if the BRANCHES
like {Proportion Ratio, Equation Solver, Decimal Fraction, Prime Checker} are the PARTS of ALGEBRA
and ALGEBRA is their BRANCH
 */


const mongoose = require("mongoose");

//name: name of the Part (Sub-Branch)
//description: description of the part (Sub-Branch)
//btanchID: id of the Branch that the part belongs To
//subPart: tells if this part has it's own sub-parts
//ownStyle: tells if this part has it's own CSS style

const partsSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    branchID: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('parts', partsSchema);






//adding subparts

/* Branches.findOne({ name: "Health" }, (err, found) => {

    var arr = [
        { name: 'aaaaa', description: 'bbbbbbbbbb', branchID: found._id, subPart: false, test: true },
    ];

    Parts.insertMany(arr, function (error, docs) { console.log(docs); });
}); */


//to add a field to the record that not in the schema
/*
  NEWRECORD.set('fieldTwo', 'def')
*/

//to get a field from the record that is not a part of the schema
/*
  console.log(found.get('test'));
});
 */


//finding child of a specific parent
/*
Branches.findOne({ name: "Miscellaneous" }, (err, branch) => {
    Parts.find({ branchID: branch._id }, (err, found) => {
        for (i = 0; i < found.length; i++) {
            console.log(i + 1 + "  " + found[i].name);
        }
    });
});
 */
