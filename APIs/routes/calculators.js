//jshint esversion:6

//setting requirments
const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

//getting modules
const Branches = require("../models/branches");
const Parts = require("../models/parts");
const subParts = require("../models/sub-parts");


const router = express.Router();









/////////////
/* ROUTING */
/////////////

//Calculators Home Page
router.get("/", (req, res) => {

    //current path of the website
    //used in thisPage in render
    var currentPath = req.originalUrl;
    //cheking if after the path there was not a "/", we add it
    if (currentPath.charAt(currentPath.length - 1) != "/") {
        currentPath = currentPath + "/";
    }

    //getting all branches, just their name and description
    Branches.find({}, { _id: false, name: true, description: true }, (err, branchs) => {
        if (err) { console.log(err); }
        else {
            //if we got the branches, we show them
            if (branchs) {

                res.render("calculators",
                    {
                        title: "Calculators",
                        calculators: branchs,
                        thisPageURL: currentPath,
                        calcPage: true
                    }
                );

            }
        }
    });
});






//calculators branchs page
//in the branch pages, we search to find the branch, if we got it, then we show its parts
router.get("/:branch", (req, res) => {

    //the part user searching for
    const branchName = _.startCase(req.params.branch);

    //current path of the website
    //used in thisPage in render
    var currentPath = req.originalUrl;
    //cheking if after the path there was not a "/", we add it
    if (currentPath.charAt(currentPath.length - 1) != "/") {
        currentPath = currentPath + "/";
    }


    //checking if this branch available
    //getting only ID and name if the branch
    Branches.findOne({ name: branchName }, { _id: true, name: true, description: true }, (err, branch) => {
        if (err) { console.log(err); }

        else {
            //if we got the branch, then we search for its parts
            if (branch) {

                //getting the part of the branch, just their name and description
                Parts.find({ branchID: branch._id }, { _id: false, name: true, description: true }, (error, parts) => {
                    if (err) { console.log(error); }

                    else {
                        //if it got the right parts, then we show them
                        if (parts) {

                            res.render("calculators",
                                {
                                    title: branch.name,
                                    calculators: parts,
                                    thisPageURL: currentPath,
                                    calcPage: true,
                                    backName: "Calculators",
                                    backURL: req.originalUrl.substring(0, ((req.originalUrl.length - branchName.length) - 1)) //this is the URl of the current page without BRANCH name
                                }
                            );

                        }
                    }

                });
            }
            //if the branch did not excist
            else {
                res.status(404).render("404-not-found",
                    {
                        title: "404 not found ",
                        css: "other-routes/404-not-found",
                        calcPage: true,
                        text404: req.originalUrl
                    });
            }
        }
    });
});






//calculators part page
//in the part page, we show the calculator or its sub parts
router.get("/:branch/:part", (req, res) => {

    //the part user searching for
    const branchName = _.startCase(req.params.branch);
    const partName = _.startCase(req.params.part);

    //current path of the website
    //used in thisPage in render
    var currentPath = req.originalUrl;
    //cheking if after the path there was not a "/", we add it
    if (currentPath.charAt(currentPath.length - 1) != "/") {
        currentPath = currentPath + "/";
    }

    //checking if this branch available
    //if so, getting it's name and id
    Branches.findOne({ name: branchName }, { _id: true, name: true }, (err, branch) => {
        if (err) { console.log(err); }
        else {
            //if the first part of the link was right (BRANCH name part), then we look at the second part
            if (branch) {

                //getting the part of the branch
                //if so, getting it's name and id, and subPart if it has it
                Parts.findOne({ name: _.startCase(partName), branchID: branch._id }, { _id: true, name: true, subPart: true, specificPage: true, calc: true }, (error, part) => {
                    if (err) { console.log(error); }

                    else {
                        //if it got the right part,we show the calculator, or if it has subparts then we show them
                        if (part) {

                            //checking if the part has sub-parts
                            //if so, getting it's name and description
                            if (part.get('subPart')) {
                                subParts.find({ partID: part._id }, { _id: false, name: true, description: true }, (error, subParts) => {

                                    //if we got the subparts, then we how it
                                    if (subParts) {

                                        res.render("calculators",
                                            {
                                                title: part.name,
                                                calculators: subParts,
                                                thisPageURL: currentPath,
                                                calcPage: true,
                                                backName: branch.name,
                                                backURL: req.originalUrl.substring(0, ((req.originalUrl.length - partName.length) - 1)) //this is the URl of the current page without PART name
                                            }
                                        );
                                    }
                                });
                            }
                            //if it doesnt have a sub-part, then it must be a calculator page
                            else {

                                //location and name of this page
                                //if it doesnt have a specific page. then it use default page for the part
                                //if it has specific page, then it use its own page
                                let thisPage = "calculators/" + _.kebabCase(branchName);
                                //css file
                                let thisCSS = "calculators/" + _.kebabCase(branchName) + "/" + _.kebabCase(branchName);

                                //cheking if the part has its own CSS File
                                if (part.get('specificPage')) {
                                    thisPage += "/" + _.kebabCase(partName);
                                    thisCSS = thisPage;
                                }

                                res.render(thisPage,
                                    {
                                        title: part.name,
                                        css: thisCSS,
                                        javascript: "calculators/" + _.kebabCase(branchName) + "/" + _.kebabCase(partName),
                                        calcPage: true,
                                        backName: branch.name,
                                        backURL: req.originalUrl.substring(0, ((req.originalUrl.length - partName.length) - 1)),
                                        calc: part.get('calc')
                                    }
                                );

                            }

                        }
                        //if the part did not excist
                        else {
                            res.status(404).render("404-not-found",
                                {
                                    title: "404 not found ",
                                    css: "other-routes/404-not-found",
                                    calcPage: true,
                                    text404: req.originalUrl
                                });
                        }
                    }

                });
            }
            //if the branch did not excist
            else {
                res.status(404).render("404-not-found",
                    {
                        title: "404 not found ",
                        css: "other-routes/404-not-found",
                        calcPage: true,
                        text404: req.originalUrl
                    });
            }
        }
    });
});






//calculators part page
//in the subpart page, we show toe calculator
router.get("/:branch/:part/:subpart", (req, res) => {

    //the part user searching for
    const branchName = _.startCase(req.params.branch);
    const partName = _.startCase(req.params.part);
    const subPartName = _.startCase(req.params.subpart);

    //checking if this branch available
    //if so, getting it's name and id
    Branches.findOne({ name: branchName }, { _id: true, name: true }, (err, branch) => {
        if (err) { console.log(err); }
        else {
            //if the first part of the link was right (BRANCH name part), then we look at the second part
            if (branch) {

                //getting the part of the branch
                //if so, getting it's name and id, and subPart if it has it
                Parts.findOne({ name: _.startCase(partName), branchID: branch._id }, { _id: true, name: true, subPart: true }, (error, part) => {
                    if (err) { console.log(error); }

                    else {
                        //if it got the right part,we show the calculator, or if it has subparts then we show them
                        if (part) {

                            //checking if the subpart is availavle
                            //if so, getting it's name and description
                            if (part.get('subPart')) {
                                subParts.findOne({ name: subPartName, partID: part._id }, { _id: false, name: true, description: true }, (error, subPart) => {

                                    //if we got the subparts, then we how it
                                    if (subPart) {

                                        //location and name of this page
                                        let thisPage = "calculators/" + _.kebabCase(branchName) + "/" + _.kebabCase(partName) + "/" + _.kebabCase(subPartName);

                                        res.render(thisPage,
                                            {
                                                title: subPart.name,
                                                css: "calculators/" + _.kebabCase(branchName) + "/" + _.kebabCase(partName),
                                                javascript: thisPage,
                                                calcPage: true,
                                                backName: part.name,
                                                backURL: req.originalUrl.substring(0, ((req.originalUrl.length - subPartName.length) - 1)) //this is the URl of the current page without PART name
                                            }
                                        );

                                    }
                                    //if the subpart did not excist
                                    else {
                                        res.status(404).render("404-not-found",
                                            {
                                                title: "404 not found ",
                                                css: "other-routes/404-not-found",
                                                calcPage: true,
                                                text404: req.originalUrl
                                            });
                                    }
                                });
                            }
                        }
                        //if the part did not excist
                        else {
                            res.status(404).render("404-not-found",
                                {
                                    title: "404 not found ",
                                    css: "other-routes/404-not-found",
                                    calcPage: true,
                                    text404: req.originalUrl
                                });
                        }
                    }

                });
            }
            //if the branch did not excist
            else {
                res.status(404).render("404-not-found",
                    {
                        title: "404 not found ",
                        css: "other-routes/404-not-found",
                        calcPage: true,
                        text404: req.originalUrl
                    });
            }
        }
    });
});



//exporting routes
module.exports = router;
