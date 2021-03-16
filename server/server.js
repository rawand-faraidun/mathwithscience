// jshint esversion:9

// setting requirements
var express = require('express');

// setting app
const app = express();


// setting port
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`[SERVER]: app started on port ${app.get('port')}`);
})