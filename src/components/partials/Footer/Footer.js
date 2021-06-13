import React from 'react';
import { Link } from 'react-router-dom';

// importing styling
import './footer.css';

// impirting Components
import Brand from '../Brand/Brand';
import languageHelper from '../languageHelper';
import LanguageSelector from './LanguageSelector/LanguageSelector';



// page content all languages
const componentContent = {
    links: [
        { en: 'About', kr: 'دەربارە', url: 'about' },
        { en: 'Collections', kr: 'لقەکان', url: 'collections' },
        { en: 'Contact', kr: 'پەیوەندی', url: 'contact' },
        { en: 'All Calculators', kr: 'هەموو ژمێرەرەکان', url: 'calculators' },
        { en: 'Contribute', kr: 'بەشداریکردن', url: 'contribute' }
    ],
    privacyPolicy: {
        en: 'Privacy policy & cookies',
        kr: 'پاراستنی زانیاریەکان و کووکی',
    }
}


/**
 *  @return {Element} : returns the footer
 */
function Footer() {
    return (
        <>
            {/* changing the direction if the page was kurdish */}
            <footer className="footer" dir={languageHelper.getDirection()}>

                {/* the line above the footer */}
                <hr className="footer-line" />


                {/* contains the footer top part */}
                <div className="footer-holder">

                    {/* the left side of the footer */}
                    <div className="footer-left">

                        {/* brand name and logo */}
                        <Brand />

                        {/* adding language selector */}
                        <LanguageSelector />
                    </div>

                    {/* the right side of the footer */}
                    <div className="footer-right">

                        {/* left list */}
                        <ul className="footer-list">


                            {/* showing footer links content */}
                            {componentContent.links.map((link, i) => {
                                return (
                                    <li className={`link ${languageHelper.getClass()}`} key={i}>
                                        <Link to={`/${link.url}`}>
                                            {link[[languageHelper.getLanguageSymbol()]]}
                                        </Link>
                                    </li>
                                )
                            })}

                            {/* the social links after the links */}
                            <li className="link socials">
                                <Link to="https://www.instagram.com/mathwithscience/" target="_blank" rel="noreferrer" title="Math with Science on Instagram">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="https://github.com/rawand-faraidun/math-with-science#readme" target="_blank" rel="noreferrer" title="Math with Science on Github">
                                    <i className="fab fa-github"></i>
                                </Link>
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

export default Footer;