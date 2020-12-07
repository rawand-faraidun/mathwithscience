//jshint esversion:6

//setting requirements
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const helmet = require("helmet");

const app = express();


//connectiong to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("!!DB CONEECTED!!"))
    .catch(err => { console.log(`DB Connection Error: ${err.message}`); });

mongoose.set("useCreateIndex", true);


//configuring app
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(helmet({
    contentSecurityPolicy: false,
}));




//getting route files
const homeRoute = require("./APIs/routes/home-about");
const calculatorsRoutes = require("./APIs/routes/calculators");
const contactRoutes = require("./APIs/routes/contact");

//setting routes
app.use("/", homeRoute);
app.use("/" + _.kebabCase(_.lowerCase("calculators")), calculatorsRoutes);
app.use("/", contactRoutes);


//404 not found page
app.use((req, res) => {
    res.status(404).render("404-not-found",
        {
            title: "404 not found ",
            css: "other-routes/404-not-found",
            text404: req.originalUrl
        });
});


//setting up the port number for the website
app.set('port', process.env.PORT || 3000);
console.log(app.get('port'))
app.listen(app.get('port'));