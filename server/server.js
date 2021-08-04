require('dotenv').config({ path: './../.env' })
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

// setting app
const app = express()


// configuring app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())




// serving app frontend





// setting and listening to post
app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), (err) => {
    if (err) { console.log(`!!!SERVER LISTENING ERROR: ${err}`) }
    console.log(`server listening on port ${app.get('port')}`)
})