import React, { useEffect } from "react";

// importing styling
import './header-animation.css';

// importing libraries
import anime from "animejs";


/**
 * @return {Element} : Header navigation drawer animation
 */
function HeaderAnimation() {


    // the animation rows and columns
    const animationRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const animationColumns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    // starting point of the animation, this will pass the first 11 columns
    const animationStart = (animationRows.length * animationColumns.length) - ((animationRows.length * animationColumns.length) - (16 * animationColumns.length))

    // end point of the animation
    const animationEnd = (animationRows.length * animationColumns.length);


    // creating the animation after rendering the animation div
    useEffect(() => {
        anime({
            targets: '#animation .el',
            scale: [
                { value: 0.1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 1200 }
            ],
            loop: true,
            delay: anime.stagger(200, { grid: [10, 20], from: anime.random(animationStart, animationEnd) })
        });
    });


    return (
        <>
            {/* the animation */}
            <div className="animation" id="animation">
                {
                    // generating rows of the animation
                    animationRows.map((row, i) =>
                        <div className="animation-row" id={`row${i}`} key={i}>
                            {
                                // generation column squares in the animation
                                animationColumns.map((column, j) => {
                                    return <div className="animation-square el" key={`${i}-${j}`} />
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default HeaderAnimation;