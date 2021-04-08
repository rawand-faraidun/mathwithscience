//jshint esversion:9

const mongoose = require("mongoose");


/**
 * @Schema : Branches Schema
 * 
 * 
 * @en : {Object}
 *      name {String} : english name of the branch
 *      description {String} : english description of the branch
 * 
 * @kr : {Object}
 *      name {String} : kurdish name of the branch
 *      description {String} : kurdish description of the branch
 * 
 * @keywords {Array} : includes keywords for this branch
 * 
 * @urlName {String} : branch as url string, it is unique for each branch
 * 
 * @visitCount {Number} : number of the visits to this branch
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
    keywords: [String],
    urlName: {
        type: String,
        unique: true
    },
    visitCount: {
        type: Number,
        min: 0,
    }
});

module.exports = mongoose.model('branch', branchesSchema);