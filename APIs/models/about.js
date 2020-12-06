//jshint esversion:6


/* 
ABOUT are the spechs in about page
 */


const mongoose = require("mongoose");

//heading: heading text of the part
//quote: quote text of the part
//speaches: speaches of the part

const aboutSchema = mongoose.Schema({
    heading: { type: String, required: true },
    quote: { type: String, required: true },
    speaches: { type: Array, required: true }
});


module.exports = mongoose.model('about', aboutSchema);





/* 
// All Initial Calculators

var arr = [
    {
        heading: 'The Purpouse',
        quote: 'Doing more, In less time',
        speaches: [
            'Math is Fun, but sometimes it gets really hard in some calculation and equation.',
            'with Math with Science, You can calculate some of your math problems in a few seconds. And I do my best to get new calculators to the website as soon as posible.',
            'As a user, You can help me with your suggetion and Ideas to new calculations to imptove the website, or report any mistake or problem in the exciting ones.'
        ]
    }
];

about.insertMany(arr, function (error, docs) { console.log(docs); });
 */