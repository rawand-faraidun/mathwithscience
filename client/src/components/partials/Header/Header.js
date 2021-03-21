import React, { useState } from 'react';

// importing styling
import './header.css';

// importing libraries
import anime from "animejs";

// importing components
import Brand from '../Brand/Brand';
import Burger from './Burger/Burger';
import Searchbar from './Searchbar/Searchbar';
import Navlinks from './Navlinks/Navlinks';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';



/**
 *  @return : Element, returns the Header element
 */
function Header() {

    // this controls navigation state, determines the state of navigation is opened or not
    const [navState, setNavState] = useState(false);

    // handles if the burger is clicked to open or close
    function navToggleHandler(state) {
        setNavState(state);
    }

    // this will close the navigation and set its state to false
    function closeNavDrawer() {
        setNavState(false);
    }


    // determines the number of rows and columns of the small screen drawer background
    const animationRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const animationColumns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // using animejs to animate of the small screen drawer background
    anime({
        targets: '.animation .el',
        scale: [
            { value: 0.1, easing: 'easeOutSine', duration: 500 },
            { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ],
        loop: true,
        delay: anime.stagger(200, { grid: [10, 20], from: 'last' })
    });


    return (
        // header of the website
        <header className="header">


            {/* the main part of header, this will be the header of small screens */}
            {/* contains brand and burger */}
            <div className="nav-main">

                {/* adding brand */}
                {/* the link Property is used to determine if this brand is link to homepage or not */}
                <Brand isLink="true" />

                {/* this will take the space between bravd and burger in small screens header */}
                <div className="nav-main-space"></div>

                {/* the burger, shows in small screens header */}
                <Burger navState={navState} navToggleHandler={navToggleHandler} />

            </div>

            {/* this will be the drawer of small screen views */}
            {/* contains navigation searchbar, links and theme switch */}
            <div className={`nav-holder ${navState ? 'nav-holder-opened' : ''}`}>

                {/* adding search bar */}
                <Searchbar />

                {/* adding navigation lins */}
                <Navlinks navState={navState} />

                {/* adding the theme switch */}
                <ThemeSwitcher />

                {/* the animation in small screens background */}
                <div className="animation">
                    {
                        // generating rows of the animation
                        animationRows.map((row, i) => {
                            return (
                                <div className="animation-row" id={`row${i}`} key={i}>
                                    {
                                        // generation column squares in the animation
                                        animationColumns.map((column, j) => {
                                            return <div className="animation-square el" id={`${i}-${j}`} key={`${i}-${j}`}></div>
                                        })
                                    }
                                </div>

                            )
                        })
                    }
                </div>

            </div>

            {/* this is to make a black layer over the body and when the user pressed outside the drawer cause to close it */}
            <div className={`nav-drawer-closer ${navState ? "nav-drawer-closer-display" : ""}`} onClick={closeNavDrawer}></div>

        </header>
    )
}

export default Header;