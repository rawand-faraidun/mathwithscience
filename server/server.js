require('dotenv').config({ path: './../.env' })
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

// setting app
const app = express()


// configuring app
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())




//connectiong to database
mongoose.connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(console.log("!!DB CONEECTED!!"))
    .catch(err => { console.log(`!!!DATABASE CONNECTION ERROR: ${err}`) })
mongoose.set("useCreateIndex", true)





// serving app frontend
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

// setting APIs routes
const routes = require('./APIs/routes/routes-config')
app.use('/apis', routes)





// setting and listening to post
app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), (err) => {
    if (err) { console.log(`!!!SERVER LISTENING ERROR: ${err}`) }
    console.log(`server listening on port ${app.get('port')}`)
})