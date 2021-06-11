import React from "react";
import { useLocation, Link } from 'react-router-dom';

// importing styling
import './navlinks.css';

// importing components
import languageHelper from '../../languageHelper';



// page content all languages
const componentContent = {
    links: [
        {
            en: 'Collections',
            kr: 'لقەکان',
            urlName: 'collections'
        },
        {
            en: 'All Calculators',
            kr: 'هەموو ژمێرەرەکان',
            urlName: 'calculators'
        }
    ]
}


/**
 * @props :
 *      @whiteOnly {Boolean}, this determines if the links must always be white or not
 * 
 * @return {Element} : Header element
 */
function Navlinks(props) {

    // used in chossing which link is gets the active class
    const thisPath = useLocation().pathname;

    return (
        <>
            {/* navigation links */}
            <div className={`nav-links ${props.navState ? 'nav-links-opened' : ''}`}>

                {/* navigation links list */}
                <ul dir={languageHelper.getDirection()}>

                    {/* adding each link */}
                    {componentContent.links.map((link, i) =>
                        <li key={i} className={`link 
                            ${thisPath.startsWith(`/${link.urlName}`) ? "active" : ''} 
                            ${props.whiteOnly ? "white" : ''}`}
                        >
                            <Link to={`/${link.urlName}`} className={languageHelper.getClass()}>
                                {link[languageHelper.getLanguageSymbol()]}
                            </Link>
                        </li>
                    )}

                </ul>
            </div>
        </>
    )
}

export default Navlinks;