import React from 'react';
import { useLocation } from 'react-router-dom';

// importing components
import languageHelper from '../../languageHelper';

// importing styling
import './language-selector.css';



// page content all languages
const pageContent = {
    en: 'language',
    kr: 'زمان'
}


/**
 * @props :
 *   @return : Element, returns language selector
 */
function LanguageSelector() {


    // getting the current path of the website
    const thisPath = useLocation().pathname;

    // checking if there is a vailed cookie for language
    if (languageHelper.vailedLanguageCookie()) {

        // checking if the path is a valied language
        if (languageHelper.vailedLanguageSymbol(thisPath.substring(1, 3))) {

            // chekig if the language in the current URL was not the same as the cookie one, then changing the cookie to the url one
            if (thisPath.substring(1, 3) !== localStorage.getItem('language')) {
                localStorage.setItem('language', thisPath.substring(1, 3));
            }
        }
    }
    // if there was no cookie, rerouting the user to english
    else {
        window.location = `/en`;
    }



    // handeling language change
    function changeLanguage(event) {
        // setting the language change as a cookie variable
        localStorage.setItem('language', event.target.value);
        // rerouting the user to the same page but in the choosen language
        window.location = `/${localStorage.getItem('language')}/${thisPath.substring(4)}`;
    }

    return (
        <>
            {/* changing the direction if the page was kurdish */}
            <div className="language-select" dir={`${languageHelper.getDirection()}`}>

                {/* adding kurdish class in kurdish page */}
                <label className={`language-selector-label ${languageHelper.getClass()}`} htmlFor="language">

                    {/* showing page content based on page klanguage */}
                    {pageContent[languageHelper.getLanguageSymbol()]}
                : </label>

                &nbsp;
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