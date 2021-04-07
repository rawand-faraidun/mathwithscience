import React, { useState } from "react";
// import { useLocation } from 'react-router-dom';

// importing styling
import './themeSwitcher.css';



/**
 *  @return {Element} : returns the theme switcher
 */
function ThemeSwitcher() {

    // using state to handle theme change, the initial value is based on the user chossen theme color before
    const [themeState, setThemeState] = useState(localStorage.getItem('theme-color'));

    // using the state to update the theme color dynamically
    document.documentElement.setAttribute('theme-color', themeState);

    // saving the user theme change dynamically
    localStorage.setItem('theme-color', themeState);


    // handeling the theme change
    function changeTheme(event) {

        // if the check box is checked, turn the page to darkmode
        if (event.target.checked) {
            setThemeState('dark');
        }
        // if the check box is not checked, turn the page to lightmode
        else {
            setThemeState('light');
        }
    }


    return (
        <>
            {/* theme switcher */}
            <div className="theme-switch-holder">

                {/* this label is the switch, using label to make the whole switch responsive to click events */}
                <label className="switch-label" htmlFor="theme-switch">

                    {/* the theme check box, not visible */}
                    <input
                        type="checkbox"
                        className="theme-switch"
                        id="theme-switch"
                        defaultChecked={themeState === 'dark' ? true : false} // true is darkmode, false is lightmode
                        onChange={changeTheme} // handles the change theme
                    />

                    {/* the theme switcher toogler */}
                    <div className="theme-toogler" />
                </label>
            </div>
        </>
    )
}

export default ThemeSwitcher;