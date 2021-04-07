//jshint esversion:9

const mongoose = require("mongoose");


/**
 * @Schema : Branches Schema
 * 
 * 
 * @en : 
 *      name: english name of the branch
 *      description: english description of the branch
 * 
 * @kr :
 *      name: kurdish name of the branch
 *      description: kurdish description of the branch
 * 
 * @urlName : branch as url string
 * 
 * @visitCount : number of the visits to this branch
 */
const branchesSchema = mongoose.Schema({
    en: {
        name: String,
        description: String
    },
    kr: {
        name: String,
        description: String
    },
    urlName: String,
    visitCount: {
        type: Number,
        min: 0,
    }
});

module.exports = mongoose.model('branch', branchesSchema);