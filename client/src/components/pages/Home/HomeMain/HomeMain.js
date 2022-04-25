import React, { useState } from 'react'
import Particles from 'react-tsparticles'

import './home-main.css'
import SearchContainer from './SearchContainer'



/**
 *  @return {Element} : home main element
 */
export default function HomeMain() {

    // determining if the particles are ready or not
    const [particlesReady, setParticlesReady] = useState(false)


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
                        fullScreen: { enable: false }
                    }}
                />


                {/* home page search container */}
                <SearchContainer />

            </div>
        </>
    )
}