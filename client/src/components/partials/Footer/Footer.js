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
        { en: 'Branches', kr: 'لقەکان', url: 'calculators' },
        { en: 'Contact', kr: 'پەیوەندی', url: 'contact' },
        { en: 'All Calculators', kr: 'هەموو ژمێرەرەکان', url: 'all-calculators' },
        { en: 'Contribute', kr: 'بەشداریکردن', url: 'contribute' }
    ],
    privacyPolicy: {
        en: 'Privacy policy & cookies',
        kr: 'پاراستنی زانیاریەکان و کووکی',
    }
}


/**
 *  @return : Element, returns all the frontend
 *  @includes : page footer
 */
function Footer() {
    return (
        <>
            {/* changing the direction if the page was kurdish */}
            <footer className="footer" dir={languageHelper.getDirection()}>

                <hr className="footer-line" />

                <div className="footer-holder">

                    {/* the left side of the footer */}
                    <div className="footer-left">

                        {/* adding brand */}
                        <Brand />

                        {/* adding language selector */}
                        <LanguageSelector />
                    </div>

                    {/* the right side of the footer */}
                    <div className="footer-right">

                        {/* left list */}
                        <ul className="footer-list">


                            {/* showing footer links content based on page language */}
                            {componentContent.links.map((link, i) => {
                                return (
                                    <li className={`link ${languageHelper.getClass()}`} key={i}>
                                        <a href={`/${link.url}`}>
                                            {link[[languageHelper.getLanguageSymbol()]]}
                                        </a>
                                    </li>
                                )
                            })}
                            <li className="link socials">
                                <a href="/" title="Math with Science on Instagram">
                                    <i className="fab fa-instagram instagram"></i>
                                </a>
                                <a href="/" title="Math with Science on Facebook">
                                    <i className="fab fa-facebook-square facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-details" dir="ltr">
                    <p>©2020 - {new Date().getFullYear()} Math with Science</p>
                    <p className="footer-details-divider"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                    <p className={`privacy-policy ${languageHelper.getClass()}`}>
                        <a href="/privacy-policy">{componentContent.privacyPolicy[languageHelper.getLanguageSymbol()]}</a>
                    </p>
                </div>

            </footer>
        </>
    )
}

export default Footer;