import React from 'react';
import { Link } from 'react-router-dom';

// importing styling
import './brand.css';

// importing images
import brandWhite from './math-with-science-brand-white.svg';
import brandBlack from './math-with-science-brand-black.svg';



/**
 * @props :
 *      @isLink {Boolean}, this determines if the brand is link or not
 *      @whiteOnly {Boolean}, this determines if the brand must be white only or not
 * 
 * @return {Element} : brand name and logo
 */
function Brand(props) {

    return (
        <>
            {/* the brand name and logo */}
            <div className="brand">

                {/* adding to property conditionally based on if the brand be link or not */}
                <Link to='/'>

                    {/* white brand */}
                    <img
                        src={brandWhite}
                        alt="Brand"
                        className="brand-white"
                        style={{ display: props.whiteOnly ? 'block' : '' }} // if whiteOnltyy was active, then it shows white brand in light and dark mode
                    />
                    {/* black brand */}
                    <img
                        src={brandBlack}
                        alt="Brand"
                        className="brand-black"
                        style={{ display: props.whiteOnly ? 'none' : '' }} // if whiteOnltyy was active, then it hide black brand in light and dark mode
                    />
                </Link>
            </div>
        </>
    )
}

export default Brand;