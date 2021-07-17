import React from 'react'
import { useLocation } from 'react-router-dom'

import './language-selector.css'
import languageHelper from '../../languageHelper'



// component content
const componentsContent = {
    en: 'Language',
    kr: 'زمان'
}



/**
 *  @return {Element} : language selector
 */
export default function LanguageSelector() {


    // getting the current path of the website
    const thisPath = useLocation().pathname

    // handeling language change
    function changeLanguage(event) {

        // setting the language change as a cookie variable
        localStorage.setItem('language', event.target.value)

        // rerouting the user to the same page but in the choosen language
        window.location = thisPath

        // not using reload function because i want the website to go to top after the language selection, but reload starts from the current Y offset
        // window.location.reload()
    }


    return (
        <>
            {/* language selector */}
            <div className="language-select" dir={`${languageHelper.getDirection()}`}>

                {/* language selector label */}
                <label className={`language-selector-label ${languageHelper.getClass()}`} htmlFor="language">

                    {/* showing label content based on page language */}
                    {componentsContent[languageHelper.getLanguageSymbol()]} : &nbsp
                </label>

                {/* language selector select */}
                <select
                    name="language"
                    id="language"
                    className="language-selector"
                    onChange={changeLanguage}
                    defaultValue={languageHelper.getLanguageSymbol()}
                >
                    <option value="en">English</option>
                    <option value="kr">کوردی</option>
                </select>
            </div>
        </>
    )
}