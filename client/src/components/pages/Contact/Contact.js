import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import './contact.css'
import logo from './math-with-science.svg'
import languageHelper from '../../partials/languageHelper'



// component content
const componentContent = {
    head: {
        en: 'Contact',
        kr: 'پەیوەندی'
    },
    name: {
        en: 'Name',
        kr: 'ناو'
    },
    email: {
        en: 'E-mail',
        kr: 'ئیمەیڵ'
    },
    cause: {
        en: 'Contacting cause',
        kr: 'هۆکاری پەیوەندی کردن'
    },
    title: {
        en: 'Title',
        kr: 'بابەت'
    },
    description: {
        en: 'Description',
        kr: 'دەربارە'
    },
    submit: {
        en: 'Submit',
        kr: 'ناردن'
    },
    alert: {
        maxCheck: {
            en: 'cant be longer than',
            kr: 'نابێت زیاتر بێت لە'
        },
        emptyCheck: {
            en: 'must fill atleast one field to submit',
            kr: 'پێویستە بەلایەنی کەمەوە زانیاریەک پڕ بکەیتەوە',
        }
    }
}




/**
 * @returns {Element} : contact element
 */
export default function Contact() {

    // storing input values
    const [values, setValues] = useState({
        name: { field: '', max: 50 },
        email: { field: '', max: 50 },
        cause: { field: '', max: 50 },
        title: { field: '', max: 100 },
        description: { field: '', max: 255 },
    })

    // flash message
    const [flash, setFlash] = useState('')


    // handling form input
    function inputHandler(e) {
        setValues(
            { ...values, [e.target.id]: { field: e.target.value, max: values[e.target.id].max } }
        )
    }


    // submiting contact
    function submitContact() {

        // storing values
        let data = {}

        // checking for not typed fields
        for (const [field, value] of Object.entries(values)) {
            if (value.field.length > value.max) {
                return alert(
                    `${componentContent[field][languageHelper.getLanguageSymbol()]} ${componentContent.alert.maxCheck[languageHelper.getLanguageSymbol()]} ${value.max}`
                )
            }
            data[field] = value.field
        }

        // must have atleast 1 input filled
        if (!Object.values(data).some((value) => value.length > 0)) return alert(componentContent.alert.emptyCheck[languageHelper.getLanguageSymbol()])


        // sending the data to the backend
        axios.post('/apis/contact', data).then(response => {

            // sertting flash message
            setFlash(
                <div className={`contact-flash ${languageHelper.getClass()}`}
                    style={{ backgroundColor: response.data.status === 'success' ? 'var(--main-green-color)' : 'var(--main-red-color)' }}
                >
                    {response.data.message[languageHelper.getLanguageSymbol()]}
                </div>
            )

            // reseting the values
            setValues({
                name: { field: '', max: 50 },
                email: { field: '', max: 50 },
                cause: { field: '', max: 50 },
                title: { field: '', max: 100 },
                description: { field: '', max: 255 }
            })

            // disapearing flash message after 5 seconds
            setTimeout(() => {
                setFlash(null)
            }, 5000)
        })
    }


    return (
        <>
            {/* overriding document head */}
            <Helmet>
                <title>{componentContent.head[languageHelper.getLanguageSymbol()]} | Math with Science</title>
                <meta name="description" content={`${componentContent.head[languageHelper.getLanguageSymbol()]}`} />
            </Helmet>


            {/* flash message */}
            {flash}

            {/* contact container */}
            <div className="contact-container" dir={languageHelper.getDirection()}>

                {/* contact */}
                <div className="contact">

                    {/* contact image */}
                    <div className="contact-logo">
                        <img src={logo} alt="math with science logo" />
                    </div>

                    {/* contact heading */}
                    <h1 className={`contact-heading ${languageHelper.getClass()}`}>
                        {componentContent.head[languageHelper.getLanguageSymbol()]}
                    </h1>

                    {/* contact form */}
                    <div className="contact-form">

                        {/* name input */}
                        <div className="form-control contact-name">
                            <label htmlFor="contact-name" className={`form-label ${languageHelper.getClass()}`}>
                                {componentContent.name[languageHelper.getLanguageSymbol()]}:
                            </label>
                            <input type="text" id="name" className={`form-input ${languageHelper.getClass()}`}
                                value={values.name.field} onChange={inputHandler}
                            />
                        </div>

                        {/* email input */}
                        <div className="form-control contact-email">
                            <label htmlFor="contact-email" className={`form-label ${languageHelper.getClass()}`}>
                                {componentContent.email[languageHelper.getLanguageSymbol()]}:
                            </label>
                            <input type="email" id="email" className={`form-input ${languageHelper.getClass()}`}
                                value={values.email.field} onChange={inputHandler}
                            />
                        </div>

                        {/* cause input */}
                        <div className="form-control contact-cause">
                            <label htmlFor="contact-cause" className={`form-label ${languageHelper.getClass()}`}>
                                {componentContent.cause[languageHelper.getLanguageSymbol()]}:
                            </label>
                            <input type="text" id="cause" className={`form-input ${languageHelper.getClass()}`}
                                value={values.cause.field} onChange={inputHandler}
                            />
                        </div>

                        {/* title input */}
                        <div className="form-control contact-title">
                            <label htmlFor="contact-title" className={`form-label ${languageHelper.getClass()}`}>
                                {componentContent.title[languageHelper.getLanguageSymbol()]}:
                            </label>
                            <input type="text" id="title" className={`form-input ${languageHelper.getClass()}`}
                                value={values.title.field} onChange={inputHandler}
                            />
                        </div>

                        {/* description input */}
                        <div className="form-control contact-description">
                            <label htmlFor="contact-description" className={`form-label ${languageHelper.getClass()}`}>
                                {componentContent.description[languageHelper.getLanguageSymbol()]}:
                            </label>
                            <textarea id="description" className={`form-input ${languageHelper.getClass()}`} rows="3"
                                value={values.description.field} onChange={inputHandler}>
                            </textarea>
                        </div>


                        {/* submit contact */}
                        <button className={`submit-contact ${languageHelper.getClass()}`} onClick={submitContact}>
                            {componentContent.submit[languageHelper.getLanguageSymbol()]}
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}
