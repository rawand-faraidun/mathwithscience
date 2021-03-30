import React from 'react';

// importing styling
import './footer.css';

// impirting Components
import Brand from '../Brand/Brand';

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

                    {/* the language choosing select */}
                    <div className="footer-language-select">
                        <label className="language-selector-label" htmlFor="language">Language: </label>

                        {/* the language selector */}
                        <select name="language" id="language" className="language-selector">
                            <option value="en">English</option>
                            <option value="kr">کوردی</option>
                        </select>
                    </div>
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
                                <i class="fab fa-instagram instagram"></i>
                            </a>
                            <a href="/" title="Math with Science on Facebook">
                                <i class="fab fa-facebook-square facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="footer-copyright">
                <span>©2020 - {new Date().getFullYear()} Math with Science</span>
            </div>

        </footer>
    )
}

export default Footer;