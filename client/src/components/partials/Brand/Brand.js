import React from 'react';

// importing brand logos for dark and light theme
import brandBlack from './math-with-science-brand-black.svg';
import brandWhite from './math-with-science-brand-white.svg';

// importing styling
import './brand-style.css'

function Brand() {
    return (
        // creationg a div to contain brand 
        <div className="brand-logo">

            {/* making the brand as a link */}
            <a href="/">

                {/* adding the black brand, shown as default */}
                <img src={brandBlack} alt="Brand" className="brand brand-black" />

                {/* adding the white brand, hidden by default, but it will be shown with black theme */}
                <img src={brandWhite} alt="Brand" className="brand brand-white" />

            </a>
        </div>
    )
}

export default Brand;