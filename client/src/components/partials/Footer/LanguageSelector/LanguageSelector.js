import React from 'react';
import { useLocation } from 'react-router-dom';

// importing styling
import './language-selector.css';



/**
 * @props :
 *   @return : Element, returns language selector
 */
function LanguageSelector() {


    // getting the current path of the website
    const thisPath = useLocation().pathname;

    // checking if the path is a valied language
    if (thisPath.substring(1, 3) === 'en' || thisPath.substring(1, 3) === 'kr') {

        // chekig if the language in the current URL was not the same as the cookie one, then changing the cookie to the url one
        // the language in url is from second to forth letter, that is why substring used
        if (thisPath.substring(1, 3) !== localStorage.getItem('language')) {
            localStorage.setItem('language', thisPath.substring(1, 3));
        }
    }
    // if the language is not valied
    else {
        ////////////////////////////////
        ////////////////////////////////
        ////////////////////////////////
        ////////////////////////////////
        /* this will be changed to 404 later */
        ////////////////////////////////
        ////////////////////////////////
        ////////////////////////////////
        ////////////////////////////////
        window.location = `/en`;
    }

    // handeling language change
    function changeLanguage(event) {
        // setting the language change as a cookie variable
        localStorage.setItem('language', event.target.value);
        // rerouting the user to the same page but in the choosen language
        window.location = `/${localStorage.getItem('language')}`;
    }

    return (
        <>
            {/* the language choosing select */}
            <div className="language-select">
                <label className="language-selector-label" htmlFor="language">Language: </label>

                {/* the language selector */}
                <select
                    name="language"
                    id="language"
                    className="language-selector"
                    onChange={changeLanguage}
                    defaultValue={localStorage.getItem('language')} // making default value as the choosen language before
                >
                    <option value="en">English</option>
                    <option value="kr">کوردی</option>
                </select>
            </div>
        </>
    )
}

export default LanguageSelector;