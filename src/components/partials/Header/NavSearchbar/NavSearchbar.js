import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import './nav-searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



/**
 * @return {Element} : header searchbar element
 */
export default function NavSearchbar() {

    // checking if the user is in home page, this element is not shown in homepage header
    const thisPath = useLocation().pathname

    // search bar text
    const [searchText, setSearchText] = useState('')

    // handling the inputs in search bar
    function search(event) {
        setSearchText(event.target.value)
    }

    return (
        <>
            {/* header searchbar */}
            <div className="nav-search-holder" style={{ display: thisPath === '/' ? 'none' : '' }}>

                {/* searchbar input */}
                <input
                    type="text"
                    className="nav-searchbar"
                    placeholder="Search..."
                    value={searchText}
                    onChange={search}
                    autoComplete="off"
                />

                {/* searchbar search icon */}
                <div className="nav-search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
        </>
    )
}