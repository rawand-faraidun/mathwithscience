import React from 'react';

// importing styling
import './footer.css';

// impirting Components
import Brand from '../Brand/Brand';
import LanguageSelector from './LanguageSelector/LanguageSelector';

/**
 *  @return : Element, returns all the frontend
 *  @includes : page footer
 */
function Footer() {
    return (
        <footer className="footer">

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
                    <ul className="footer-list footer-list-left">
                        <li className="link"><a href="/">About</a></li>
                        <li className="link"><a href="/">Contact</a></li>
                        <li className="link"><a href="/">Contribute</a></li>
                    </ul>

                    {/* right list */}
                    <ul className="footer-list footer-list-right">
                        <li className="link"><a href="/">Branches</a></li>
                        <li className="link"><a href="/">All Calculators</a></li>
                        <li className="link">Social Medias</li>
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

            <div className="footer-details">
                <p>©2020 - {new Date().getFullYear()} Math with Science</p>
                <p className="footer-details-divider"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                <p className="privacy-policy"><a href="/">Privacy policy & cookies</a></p>
            </div>

        </footer>
    )
}

export default Footer;