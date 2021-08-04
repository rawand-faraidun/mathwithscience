const router = require('express').Router()

const Contacts = require('../models/Contact')




// setting contacts api
router.post('/', (req, res) => {

    // creating the contact
    let contact = new Contacts(req.body)

    // saving the contact
    contact.save()
        .then(() => {
            res.send({
                status: 'success',
                message: {
                    en: 'Contact successfuly made',
                    kr: 'بەسەرکەوتوییی نێردرا'
                }
            })
        })
        .catch(err => {
            console.log(err.message)
            res.send({
                status: 'failed',
                message: {
                    en: 'Contact failed, please try again',
                    kr: 'سەرکەوتوو نەبوو، تکایە هەوڵبدەرەوە'
                }
            })
        })
})





module.exports = router