import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import languageHelper from '../languageHelper'
import Brand from '../Brand/Brand'
import LanguageSelector from './LanguageSelector/LanguageSelector'



// component content
const componentContent = {
    links: [
        { en: 'About', kr: 'دەربارە', url: '/about' },
        { en: 'Collections', kr: 'لقەکان', url: '/collections' },
        { en: 'Contact', kr: 'پەیوەندی', url: '/contact' },
        { en: 'All Calculators', kr: 'هەموو ژمێرەرەکان', url: '/calculators' },
        { en: 'Contribute', kr: 'بەشداریکردن', url: 'https://github.com/rawand-faraidun/math-with-science#readme', external: true }
    ],
    privacyPolicy: {
        en: 'Privacy policy & cookies',
        kr: 'پاراستنی زانیاریەکان و کووکی',
    }
}



/**
 *  @return {Element} : footer element
 */
export default function Footer() {
    return (
        <>
            {/* footer */}
            <footer className="footer" dir={languageHelper.getDirection()}>

                {/* the line above the footer */}
                <hr className="footer-line" />


                {/* footer top part */}
                <div className="footer-holder">

                    {/* left side of the footer */}
                    <div className="footer-left">

                        {/* brand name and logo */}
                        <Brand />

                        {/* language selector */}
                        <LanguageSelector />
                    </div>


                    {/* right side of the footer */}
                    <div className="footer-right">

                        {/* left list */}
                        <ul className="footer-list">


                            {/* showing footer links content */}
                            {componentContent.links.map((link, i) => {
                                return (
                                    link.external ?
                                        <a href={link.url} rel="noreferrer" target="_blank" className={`link ${languageHelper.getClass()}`}>
                                            {link[[languageHelper.getLanguageSymbol()]]}
                                        </a>
                                        :
                                        <li className={`link ${languageHelper.getClass()}`} key={i}>
                                            <Link to={link.url}>
                                                {link[[languageHelper.getLanguageSymbol()]]}
                                            </Link>
                                        </li>
                                )
                            })}

                            {/* the social links after the links */}
                            <li className="link socials">
                                <a href="https://www.instagram.com/mathwithscience/" target="_blank" rel="noreferrer" title="Math with Science on Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://github.com/rawand-faraidun/math-with-science" target="_blank" rel="noreferrer" title="Math with Science on Github">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>


                {/* the last details in the footer */}
                <div className="footer-details" dir="ltr">

                    {/* copyright text */}
                    <p>©2020 - {new Date().getFullYear()} Math with Science</p>

                    {/* the divider between details */}
                    <p className="footer-details-divider">|</p>

                    {/* privacy policy link */}
                    <p className={`privacy-policy ${languageHelper.getClass()}`}>
                        <Link to="/privacy-policy">{componentContent.privacyPolicy[languageHelper.getLanguageSymbol()]}</Link>
                    </p>

                </div>

            </footer>
        </>
    )
}