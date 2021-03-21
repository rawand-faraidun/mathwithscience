import React from "react";

// importing styling
import './burger.css';



/**
 * @props :
 *      @navState : Boolean, determines if the navigation is opened or not, controlled in Header
 *      @navToggleHandler : Function, handels the navigation drawer toggling, controlled in header
 * 
 *  @return : Element, returns the burger used in navigation
 */
function Burger(props) {

    // handels toggling the navigation drawer and burger
    function openBurger() {
        props.navToggleHandler(!props.navState);
    }

    return (
        <div className={`nav-burger ${props.navState ? 'nav-bar-opened' : ''}`} onClick={openBurger}>
            <div className="burger-line" />
            <div className="burger-line" />
            <div className="burger-line" />
        </div>
    )
}

export default Burger;