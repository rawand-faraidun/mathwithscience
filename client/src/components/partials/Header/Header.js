import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// importing styling
import './header.css';

// importing components
import Brand from '../Brand/Brand';
import Burger from './Burger/Burger';
import Searchbar from './NavSearchbar/NavSearchbar';
import Navlinks from './Navlinks/Navlinks';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import HeaderAnimation from './HeaderAnimation/HeaderAnimation';



/**
 * @return {Element} : Header element
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
    }


    return (
        // header of the website
        <header className={`header ${!pageScrolled && !navState ? "transparent-header" : ''}`}>


            {/* the main part of header, this will be the header of small screens */}
            <div className="nav-main">

                {/* adding brand */}
                <Brand isLink="true" whiteOnly={!pageScrolled && !navState && thisPath === '/'} />

                {/* this will take the space between bravd and burger in small screens header */}
                <div className="nav-main-space"></div>

                {/* the burger, shows in small screens header */}
                <Burger
                    navState={navState}
                    navToggleHandler={navToggleHandler}
                    whiteOnly={!pageScrolled && !navState && thisPath === '/'}
                />

            </div>


            {/* this will be the drawer of small screen views */}
            <div className={`nav-holder ${navState ? 'nav-holder-opened' : ''}`}>

                {/* adding search bar */}
                <Searchbar />

                {/* adding navigation lins */}
                <Navlinks navState={navState} whiteOnly={!pageScrolled && !navState && thisPath === '/'} />

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