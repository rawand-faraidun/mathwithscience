const router = require('express').Router()





// requiring routes
const contact = require('./contact')


// setting routes
router.use('/contact', contact)






module.exports = router