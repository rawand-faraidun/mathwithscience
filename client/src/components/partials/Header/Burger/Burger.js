import React from "react";

// importing styling
import './burger.css';



/**
 * @props :
 *      @navState : {Boolean}, determines if the navigation is opened or not, controlled in Header
 *      @navToggleHandler {Function}, handels the navigation drawer toggling, controlled in header
 *      @whiteOnly {Boolean}, this determines if the burger lines must always be white or not
 * 
 * @return {Element} : navigation burger
 */
function Burger(props) {

    // handels toggling the navigation drawer and burger
    function openBurger() {
        props.navToggleHandler(!props.navState);
    }
    
    return (
        <>
            {/* navigation burger */}
            <div className={`nav-burger ${props.navState ? 'nav-bar-opened' : ''}`} onClick={openBurger}>

                {/* each lines in the burger */}
                <div className={`burger-line ${props.whiteOnly ? 'burger-line-white' : ''}`} />
                <div className={`burger-line ${props.whiteOnly ? 'burger-line-white' : ''}`} />
                <div className={`burger-line ${props.whiteOnly ? 'burger-line-white' : ''}`} />
            </div>
        </>
    )
}

export default Burger;