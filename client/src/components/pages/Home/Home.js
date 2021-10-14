import React from 'react'

import HomeMain from './HomeMain/HomeMain'
import PopularCalculators from './PopularCalculators/PopularCalculators'
import NewFeatures from './NewFeatures/NewFeatures'



/**
 *  @return {Element} : homepage element
 */
export default function Home() {

    return (
        <>
            {/* homepage */}
            <div>

                {/* main part of homepage */}
                <HomeMain />

                {/* most popular calculators */}
                <PopularCalculators />

                {/* new features */}
                <NewFeatures />

            </div>
        </>
    )

}