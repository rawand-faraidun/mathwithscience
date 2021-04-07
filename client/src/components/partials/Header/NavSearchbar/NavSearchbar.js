import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

// importing styling
import './nav-searchbar.css';



/**
 * @return {Element} : header searchbar
 */
function Searchbar() {

    // if this path was pointing to homepage the header background will be transparent
    const thisPath = useLocation().pathname;

    // this used to control search bar input text
    const [searchText, setSearchText] = useState('');

    // this handles the input on search bar
    function search(event) {
        setSearchText(event.target.value);
    }

    return (
        <>
            {/* header searchbar */}
            <div className="nav-search-holder" style={{ display: thisPath === '/' ? 'none' : '' }}>

                {/* header searchbar input */}
                <input
                    type="text"
                    className="nav-searchbar"
                    placeholder="Search..."
                    value={searchText}
                    onChange={search}
                    autoComplete="off"
                />

                {/* header searchbar search icon */}
                <div className="nav-search-icon">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </>
    )
}

export default Searchbar;