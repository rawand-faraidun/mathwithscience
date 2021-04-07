import React from 'react';
import { useLocation } from 'react-router-dom';

// importing components
import languageHelper from '../../languageHelper';

// importing styling
import './language-selector.css';



// page content all languages
const componentsContent = {
    en: 'language',
    kr: 'زمان'
}


/**
 *  @return {Element} : returns the language selector
 */
function LanguageSelector() {


    // getting the current path of the website
    const thisPath = useLocation().pathname;

    // handeling language change
    function changeLanguage(event) {

        // setting the language change as a cookie variable
        localStorage.setItem('language', event.target.value);

        // rerouting the user to the same page but in the choosen language
        window.location = thisPath;

        // not using reload function because i want the website to go to top after the language selection, but reload starts from the current Y offset
        // window.location.reload();
    }


    return (
        <>
            {/* changing the direction if the page was kurdish */}
            <div className="language-select" dir={`${languageHelper.getDirection()}`}>

                {/* adding kurdish class in kurdish page */}
                <label className={`language-selector-label ${languageHelper.getClass()}`} htmlFor="language">

                    {/* showing label content based on page language */}
                    {componentsContent[languageHelper.getLanguageSymbol()]} : &nbsp;
                </label>

                {/* the language selector */}
                <select
                    name="language"
                    id="language"
                    className="language-selector"
                    onChange={changeLanguage}
                    defaultValue={languageHelper.getLanguageSymbol()} // making default value as the choosen language
                >
                    <option value="en">English</option>
                    <option value="kr">کوردی</option>
                </select>
            </div>
        </>
    )
}

export default LanguageSelector;