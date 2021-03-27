import React from "react";

// importing styling
import './burger.css';



/**
 * @props :
 *      @navState : Boolean, determines if the navigation is opened or not, controlled in Header
 *      @navToggleHandler : Function, handels the navigation drawer toggling, controlled in header
 *      @whiteOnly : Boolean, this determines if the burger lines must always be white or not
 * 
 *  @return : Element, returns the burger used in navigation
 *  @includes : navigation burger
 */
function Burger(props) {

    // handels toggling the navigation drawer and burger
    function openBurger() {
        props.navToggleHandler(!props.navState);
    }

    // this doesn't need state because when the element re-render it will update to
    // making the lines white or not based on white only property
    const burgerLinesStyling = {}
    if (props.whiteOnly) {
        burgerLinesStyling.backgroundColor = 'var(--white-color)';
    }


    return (
        <div className={`nav-burger ${props.navState ? 'nav-bar-opened' : ''}`} onClick={openBurger}>
            <div className="burger-line" style={burgerLinesStyling} />
            <div className="burger-line" style={burgerLinesStyling} />
            <div className="burger-line" style={burgerLinesStyling} />
        </div>
    )
}

export default Burger;