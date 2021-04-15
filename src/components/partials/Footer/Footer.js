import React from 'react';

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
                                        <a href={`/${link.url}`}>
                                            {link[[languageHelper.getLanguageSymbol()]]}
                                        </a>
                                    </li>
                                )
                            })}

                            {/* the social links after the links */}
                            <li className="link socials">
                                <a href="https://www.instagram.com/mathwithscience/" target="_blank" rel="noreferrer" title="Math with Science on Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://github.com/Rawand-Faraidun/math-with-science" target="_blank" rel="noreferrer" title="Math with Science on Github">
                                    <i class="fab fa-github"></i>
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
                        <a href="/privacy-policy">{componentContent.privacyPolicy[languageHelper.getLanguageSymbol()]}</a>
                    </p>

                </div>

            </footer>
        </>
    )
}

export default Footer;