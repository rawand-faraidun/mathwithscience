import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// importing styling
import './header.css';

// importing components
import Brand from '../Brand/Brand';
import Burger from './Burger/Burger';
import Searchbar from './Searchbar/Searchbar';
import Navlinks from './Navlinks/Navlinks';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import HeaderAnimation from './HeaderAnimation/HeaderAnimation';



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



    // if this path was pointing to homepage the header background will be transparent
    const thisPath = useLocation().pathname;

    // knowing if the page is scrolled, only updates in homepage
    const [pageScrolled, setPageScrolled] = useState(false);

    /* these 2 dont need to be stated, the page scroll state will updte them to */
    // this will be the transparent ackground and transition
    const headerHomeStyle = {};
    // the white only property for homepage header navigation links and brand
    let whiteOnly = false;

    // checking if the user is in homepage
    if (thisPath === '/') {

        // updating pageScrolled
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                setPageScrolled(true);
            }
            else {
                setPageScrolled(false);
            }
        }

        // making the background transparent if the location was homepage and the page has not been scrolled and navigation was not open
        if (thisPath === '/' && !pageScrolled && !navState) {
            headerHomeStyle.backgroundColor = 'transparent';
            headerHomeStyle.transition = 'background 0.3s ease';
            whiteOnly = true;
        }
    }



    return (
        // header of the website
        <header className="header" style={headerHomeStyle}>


            {/* the main part of header, this will be the header of small screens */}
            {/* contains brand and burger */}
            <div className="nav-main">

                {/* adding brand */}
                {/* the link Property is used to determine if this brand is link to homepage or not */}
                <Brand isLink="true" whiteOnly={whiteOnly} />

                {/* this will take the space between bravd and burger in small screens header */}
                <div className="nav-main-space"></div>

                {/* the burger, shows in small screens header */}
                <Burger navState={navState} navToggleHandler={navToggleHandler} whiteOnly={whiteOnly} />
            </div>

            {/* this will be the drawer of small screen views */}
            {/* contains navigation searchbar, links and theme switch */}
            <div className={`nav-holder ${navState ? 'nav-holder-opened' : ''}`}>

                {/* adding search bar */}
                <Searchbar />

                {/* adding navigation lins */}
                <Navlinks navState={navState} whiteOnly={whiteOnly} />

                {/* adding the theme switch */}
                <ThemeSwitcher />

                {/* the animation in small screens background, MeMo keeps it from rerendering */}
                {useMemo(() => { return <HeaderAnimation /> }, [])}


            </div>

            {/* this is to make a black layer over the body and when the user pressed outside the drawer cause to close it */}
            <div className={`nav-drawer-closer ${navState ? "nav-drawer-closer-display" : ""}`} onClick={closeNavDrawer}></div>

        </header>
    )
}

export default Header;