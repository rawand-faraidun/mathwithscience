import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './home-main.css'
import Particles from 'react-particles-js'
import languageHelper from '../../../partials/languageHelper'
import SearchResult from './SearchResult/SearchResult'



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
 *  @return {Element} : home main element
 */
export default function HomeMain() {

    // getting history reference
    const history = useHistory()

    // search text
    const [searchText, setSearchText] = useState('')

    // handling the inputs in search bar
    function handleSearch(e) {
        setSearchText(e.target.value)
    }

    // listening to pressing enter, it will redirect user to search route
    function acceptSearchOnEnter(e) {
        if (e.keyCode === 13 && searchText !== '') { // enter keycode
            history.push(`/search/${searchText}`)
            setSearchText('')
        }
    }


    return (
        <>
            {/* home main */}
            <div className="home-main">


                {/* animation background */}
                <Particles
                    className="home-animation"
                    params={{
                        particles: {
                            number: {
                                value: 70,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 3
                                }
                            },
                            move: {
                                speed: 1.3
                            }
                        }
                    }}
                />


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

            </div>
        </>
    )
}