import React, { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import './header.css'
import Brand from '../Brand/Brand'
import Burger from './Burger/Burger'
import Searchbar from './NavSearchbar/NavSearchbar'
import Navlinks from './Navlinks/Navlinks'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import HeaderAnimation from './HeaderAnimation/HeaderAnimation'



/**
 * @return {Element} : header element
 */
export default function Header() {

    // determines state of the navigation
    const [navState, setNavState] = useState(false)

    // handles closing or opening 
    function navToggleHandler(state) {
        setNavState(state)
    }


    // checking if the user is in home page
    const homePage = useLocation().pathname === '/' ? true : false

    // determines if the page is scrolled, only updates in homepage
    const [homePageScrolled, setHomePageScrolled] = useState(false)

    // checking poge scrool in homepage to make the header transparent
    if (homePage) {
        // updating home page scrolled state
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                setHomePageScrolled(true)
            }
            else {
                setHomePageScrolled(false)
            }
        }
    }


    return (
        <>
            {/* header */}
            <header className={`header ${homePage && !homePageScrolled && !navState ? "transparent-header" : ''}`}>


                {/* the main part of header, this will be the header of small screens */}
                <div className="nav-main">

                    {/* brand logo */}
                    <Brand whiteOnly={homePage && !homePageScrolled && !navState} />

                    {/* this will take the space between brand and burger in small screens header */}
                    <div className="nav-main-space"></div>

                    {/* the burger, shows in small screens header */}
                    <Burger
                        navState={navState}
                        navToggleHandler={navToggleHandler}
                        whiteOnly={homePage && !homePageScrolled && !navState}
                    />
                </div>


                {/* this will be the drawer of small screens */}
                <div className={`nav-holder ${navState ? 'nav-holder-opened' : ''}`}>

                    {/* search bar */}
                    <Searchbar />

                    {/* navigation links */}
                    <Navlinks navState={navState} whiteOnly={homePage && !homePageScrolled && !navState} navToggleHandler={navToggleHandler} />

                    {/* theme switcher */}
                    <ThemeSwitcher />

                    {/* animation in small screens drawer background, preventing it from rerendering */}
                    {useMemo(() => { return <HeaderAnimation /> }, [])}

                </div>


                {/* this will make a black layer over the body when navigation drawer is opened, when the user presses it, it will close the navigation draweer */}
                <div className={`nav-drawer-closer ${navState ? "nav-drawer-closer-display" : ""}`}
                    onClick={() => navToggleHandler(false)} />

            </header>
        </>
    )
}