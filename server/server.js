// jshint esversion:9

// setting requirements
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// setting app
const app = express();


//connectiong to database
mongoose.connect(
    'mongodb://localhost:27017/MathWithScience',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(console.log("!!DB CONEECTED!!"))
    .catch(err => { console.log(`DB Connection Error: ${err.message}`); });

mongoose.set("useCreateIndex", true);


// configuring app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());




// requesting search routes
const search = require('./routes/search');
app.use("/api/search", search);

// requesting branch routes
const branches = require('./routes/branches');
app.use("/api/branches", branches);




// setting port
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`app started on port ${app.get('port')}`);
});