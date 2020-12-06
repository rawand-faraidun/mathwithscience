//jshint esversion:6

//setting requirments
const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const Contact = require("../models/contact");

const router = express.Router();

router.use(express.static("public"));



//setting contact route
router.get(["/" + _.kebabCase("contact"), "/" + _.kebabCase("contact us"), "/" + _.kebabCase("report"), "/" + _.kebabCase("feedback")], (req, res) => {
    res.render("contact", { title: "contact", css: "other-routes/contact", message: req.flash('message') });
});


//sending Contact message
router.post("/contact", (req, res) => {

    const contact = new Contact({
        email: req.body.email,
        type: req.body.type,
        title: req.body.title,
    });

    //cheking if the name was filled, then we ad it
    if(req.body.name != '' && req.body.name.length != 0){
        contact.set('name', req.body.name);
    }
    //cheking if the description was filled, then we add it
    if(req.body.description != '' && req.body.description.length != 0){
        contact.set('description', req.body.description);
    }

    //saving the contact message 
    contact.save((err, contact) => {
        if (err) {
            console.log(err._message);
            req.flash('message', 'Failed: ' + err._message);
            res.redirect("/contact");
        }
        else {
            console.log(contact);
            req.flash('message', _.upperFirst(req.body.type) + ' has been sent successfuly!');
            res.redirect("/contact");
        }
    });
});



//exporting routes
module.exports = router;
