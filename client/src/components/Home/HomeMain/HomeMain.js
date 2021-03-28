import React, { useState } from 'react';

// importing stylings
import './home-main.css';

// importing Components
import Particles from 'react-particles-js';
import SearchResult from './SearchResult/SearchResult';


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

            {/* includes homepage animation background, searchbar and branches */}
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
                    <h1 className="search-title">
                        Search a calculator for your problem
                    </h1>

                    {/* homepage search input */}
                    <input
                        type="text"
                        className="searchbar"
                        placeholder="Search..."
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
