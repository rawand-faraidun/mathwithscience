import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './home-main.css'
import Particles from 'react-tsparticles'
import languageHelper from '../../../partials/helpers/Language'
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

    // determining if the particles are ready or not
    const [particlesReady, setParticlesReady] = useState(false)

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
                    id="tsparticles"
                    loaded={() => {
                        setTimeout((container) => {
                            // changing particlesReady state when they are generated
                            // i could parse true i just use this conditions to stop react unused variable warning 😶
                            setParticlesReady(!particlesReady ? true : true);
                            // setParticlesReady(true);
                        }, 1)
                    }}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                            },
                        },
                        particles: {
                            links: {
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1.3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                },
                                value: 70,
                                // limiting the number of dots based of the width of the screen
                                limit: Math.floor(window.innerWidth) < 1000 ? Math.floor(window.innerWidth / 7.5) : Math.floor(window.innerWidth / 20)
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 3
                                }
                            },
                        },
                        detectRetina: true,
                    }
                    }
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