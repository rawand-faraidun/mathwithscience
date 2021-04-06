import React, { useState } from 'react';

// importing stylings
import './home-main.css';

// importing Components
import Particles from 'react-particles-js';
import languageHelper from '../../partials/languageHelper';
import SearchResult from './SearchResult/SearchResult';



// component content all languages
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
 *  @return : Element, returns Home Main Elements
 *  @includes : Homepage animation background, searchbar and search result
 */
function HomeMain() {

    // this controls the search text
    const [searchText, setSearchText] = useState('');

    // this handels the search functionality
    function handleSearch(e) {
        setSearchText(e.target.value);
    }


    return (

        <>

            {/* includes homepage animation background, searchbar and search results */}
            <div className="home-main">


                {/* the animation background */}
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
                <div className="search">

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
                        autoComplete="off"
                    />

                </div>


                {/* result of search, if search input is empty it will show the branches */}
                <SearchResult searchquery={searchText} />

            </div>

        </>
    );

}

export default HomeMain;
