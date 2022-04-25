import React, { useState } from 'react'

import './themeSwitcher.css'



/**
 *  @return {Element} : theme switcher element
 */
export default function ThemeSwitcher() {

    // theme state value is based on the user chossen theme color before
    const [themeState, setThemeState] = useState(localStorage.getItem('theme-color'))

    // setting dark theme color if the user didint choose a theme color before
    if (themeState === null) {
        setThemeState('dark')
    }

    // adding theme color property to the HTML
    document.documentElement.setAttribute('theme-color', themeState)

    // saving the user theme changes
    localStorage.setItem('theme-color', themeState)


    // handeling the theme change
    function changeTheme(event) {

        // if the check box is checked, turns the page to darkmode
        if (event.target.checked) {
            setThemeState('dark')
        }
        // otherwise turns the page to lightmode
        else {
            setThemeState('light')
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