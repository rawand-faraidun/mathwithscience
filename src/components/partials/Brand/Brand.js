import React from 'react'
import { Link } from 'react-router-dom'

import './brand.css'
import brandWhite from './math-with-science-brand-white.svg'
import brandBlack from './math-with-science-brand-black.svg'



/**
 * @param {Object} props :
 *      @whiteOnly {Boolean} : this determines if the brand must be white only or not
 * 
 * @return {Element} : brand name and logo element
 */
export default function Brand(props) {

    return (
        <>
            {/* brand name and logo */}
            <div className="brand">

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