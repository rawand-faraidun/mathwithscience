import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

// importing styling
import './searchbar.css';



/**
 *  @return : Element, returns the search bar in navigation
 */
function Searchbar() {


    // getting the current path of the website
    // used in chossing if the header searchbar is active or not
    // if this path was pointing to homepage the header background will be transparent
    const thisPath = useLocation().pathname;


    // this used to control search bar input text
    const [searchText, setSearchText] = useState('');

    // this handles the input on search bar
    function search(event) {
        setSearchText(event.target.value);
    }

    return (
        <div
            className="nav-search-holder"
            style={{ display: thisPath === '/' ? 'none' : '' }} // the navigation search bar is not shown in homepage
        >
            <input
                type="text"
                className="nav-searchbar"
                placeholder="Search..."
                value={searchText}
                onChange={search}
                autoComplete="off"
            />
            <div className="nav-search-icon">
                <i className="fas fa-search"></i>
            </div>
        </div >
    )
}

export default Searchbar;