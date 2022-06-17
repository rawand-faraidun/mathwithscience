import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './nav-searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



/**
 * @return {Element} : header searchbar element
 */
export default function NavSearchbar() {

    // getting history reference
    const navigate = useNavigate()
    // checking if the user is in home page, this element is not shown in homepage header
    const thisPath = useLocation().pathname


    // search bar text
    const [searchText, setSearchText] = useState('')

    // handling the inputs in search bar
    function search(event) {
        setSearchText(event.target.value)
    }

    // listening to pressing enter, it will redirect user to search route
    function acceptSearchOnEnter(e) {
        if (e.keyCode === 13 && searchText !== '') { // enter keycode
            navigate(`/search/${searchText}`)
            setSearchText('')
        }
    }

    // click on search icon redirects to search route
    function acceptSearchByIcon(e) {
        if (searchText !== '') {
            navigate(`/search/${searchText}`)
            setSearchText('')
        }
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
                    autoComplete="off"
                    value={searchText}
                    onChange={search}
                    onKeyDown={acceptSearchOnEnter}
                />

                {/* searchbar search icon */}
                <div className="nav-search-icon">
                    <FontAwesomeIcon icon={faSearch} onClick={acceptSearchByIcon} />
                </div>
            </div>
        </>
    )
}