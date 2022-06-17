import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchResult from './SearchResult/SearchResult'

import languageHelper from '../../../partials/helpers/Language'



// component content
const componentContent = {
    title: {
        en: 'Search a calculator for your problem',
        kr: 'گەڕان بکە بۆ ژمێرەری تایبەت بە کارەکەت',
    },
    searchBarPlaceholder: {
        en: 'Search',
        kr: 'گەڕان'
    }
}



/**
 *  @return {Element} : home page search container
 */
export default function SearchContainer() {

    // getting navigate reference
    const navigate = useNavigate()

    // search text
    const [searchText, setSearchText] = useState('')

    // handling the inputs in search bar
    function handleSearch(e) {
        setSearchText(e.target.value)
    }

    // listening to pressing enter, it will redirect user to search route
    function acceptSearchOnEnter(e) {
        if (e.keyCode === 13 && searchText !== '') { // enter keycode
            navigate(`/search/${searchText}`)
            setSearchText('')
        }
    }


    return (
        <>
            {/* homepage searchbar */}
            <div className="home-search">

                {/* homepage search heading text */}
                <h1 className={`search-title ${languageHelper.getClass()}`}>
                    {componentContent.title[languageHelper.getLanguageSymbol()]}
                </h1>

                {/* homepage search input */}
                <input
                    type="text"
                    className={`searchbar ${languageHelper.getClass()}`}
                    dir={languageHelper.getDirection()}
                    placeholder={`${componentContent.searchBarPlaceholder[languageHelper.getLanguageSymbol()]}...`}
                    value={searchText}
                    onChange={handleSearch}
                    onKeyDown={acceptSearchOnEnter}
                    autoComplete="off"
                />

            </div>

            {/* result of search, if search input is empty it will show the collections */}
            <SearchResult searchtext={searchText} />
        </>
    )
}
