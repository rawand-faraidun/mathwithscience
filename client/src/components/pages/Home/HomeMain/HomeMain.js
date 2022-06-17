import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"

import './home-main.css'
import SearchContainer from './SearchContainer'



/**
 *  @return {Element} : home main element
 */
export default function HomeMain() {

    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };


    return (
        <>
            {/* home main */}
            <div className="home-main">


                {/* animation background */}
                <Particles
                    className="home-animation"
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
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
                        fullScreen: { enable: false }
                    }}
                />


                {/* home page search container */}
                <SearchContainer />

            </div>
        </>
    )
}