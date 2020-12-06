//jshint esversion:6

//setting requirments
const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const Branches = require("../models/branches");
const About = require("../models/about");
const Creators = require("../models/creators");

const router = express.Router();

router.use(express.static("public"));



//setting Home route
router.get(["/", "/" + _.kebabCase("home")], (req, res) => {
    Branches.find({}, { name: true, description: true }, (err, Parents) => {
        if (err) { console.log(err); }
        else {
            if (Parents) {

                res.render("home", { ParentCalculators: Parents });
            }
        }
    });
});



//setting About route
router.get(["/" + _.kebabCase("about"), "/" + _.kebabCase("about us")], (req, res) => {
    About.find({}, {_id: false, __v: false}, (err, AboutTexts) => {
        if (err) { console.log(err); }

        //getting the helpers
        Creators.find({ master : { "$exists" : false }}, {_id: false, __v: false}, (err, helpers) => {
            if (err) { console.log(err); }

            //getting the creators
            Creators.find({ master : { "$exists" : true }}, {_id: false, __v: false}, (err, creator) => {
                if (err) { console.log(err); }
                
                res.render("about", { 
                    title: "About", 
                    css: "other-routes/about", 
                    aboutDoc: AboutTexts, 
                    aboutHelpers: helpers, 
                    aboutCreator: creator 
                });

            });
        });
    });
});



//exporting routes
module.exports = router;
