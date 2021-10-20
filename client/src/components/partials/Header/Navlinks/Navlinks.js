import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import './navlinks.css'
import languageHelper from '../../helpers/Language'



// component content
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
 * @param {Object} props :
 *      @navState {Boolean} : determines if the navigation is opened or not, controlled in Header
 *      @navToggleHandler {Function} : handels the navigation drawer toggling, controlled in header
 *      @whiteOnly {Boolean} : this determines if the links must always be white or not
 * 
 * @return {Element} : navigation links element
 */
export default function Navlinks(props) {

    // used in chossing which link is active
    const thisPath = useLocation().pathname

    // closes navigation when a link clicked
    function closeNavigation() {
        props.navToggleHandler(false)
    }


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
                            onClick={closeNavigation}
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