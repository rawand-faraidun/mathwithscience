import React from "react";
import { useLocation } from 'react-router-dom';

// importing styling
import './navlinks.css';



/**
 * @props :
 *      @isLink : Boolean, this determines if the brand is link or not
 * 
 *  @return : Element, returns the navigation links
 */
function Navlinks(props) {

    // getting the current path of the website
    // used in chossing which link is gets the active class
    const thisPath = useLocation().pathname;


    return (
        <div className={`nav-links ${props.navState ? 'nav-links-opened' : ''}`}>
            <ul>

                {/* a link to homepage if it's wanted to be seen */}
                {/* 
                <li className={`link ${thisPath === '/' ? "active" : ''}`}>
                    <a href="/">Home</a>
                </li> 
                */}

                <li className={`link ${thisPath.startsWith('/calculators') ? "active" : ''}`}>
                    <a href="/calculators">Branches</a>
                </li>

                <li className={`link ${thisPath.startsWith('/all-calculators') ? "active" : ''}`}>
                    <a href="/all-calculators">All Calculators</a>
                </li>

                {/* a link to About if it's wanted to be seen */}
                {/* 
                <li className={`link ${thisPath.startsWith('/about') ? "active" : ''}`}>
                    <a href="/about">About</a>
                </li>
                 */}

            </ul>
        </div>
    )
}

export default Navlinks;