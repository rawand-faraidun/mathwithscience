import React from 'react';
import { useLocation } from 'react-router-dom';

// importing styling
import './brand.css';

// importing images
import brandWhite from './math-with-science-brand-white.svg';
import brandBlack from './math-with-science-brand-black.svg';



/**
 * @props :
 *      @isLink : Boolean, this determines if the brand is link or not
 *      @whiteOnly : Boolean, this determines if the brand must always be white or not
 * 
 *  @return : Element, returns a brand that can be a link or not
 */
function Brand(props) {

    // getting the current path of the website
    // used in chossing if the brand be a link or not
    // if this path was pointing to homepage the brand will not be a link even if isLink prop choosen to be true
    const thisPath = useLocation().pathname;

    console.log(thisPath);


    // if the brand had isLink property and it was not homepage, return the link brand
    if (Boolean(props.isLink) && thisPath !== '/' && thisPath !== '/en' && thisPath !== '/kr') {
        return (
            <div className="brand">
                <a href="/">
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
                </a>
            </div>
        )
    }
    // returning regular brand not link
    else {
        return (
            <div className="brand">
                <img
                    src={brandWhite}
                    alt="Brand"
                    className="brand-white"

                    style={{ display: props.whiteOnly ? 'block' : '' }} // if whiteOnltyy was active, then it shows white brand in light and dark mode
                />
                <img
                    src={brandBlack}
                    alt="Brand"
                    className="brand-black"
                    style={{ display: props.whiteOnly ? 'none' : '' }} // if whiteOnltyy was active, then it hide black brand in light and dark mode
                />
            </div>
        )
    }
}

export default Brand;