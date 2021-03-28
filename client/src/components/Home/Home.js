import React from 'react';

// importing components
import HomeMain from './HomeMain/HomeMain';
import PopularCalculators from './PopularCalculators/PopularCalculators';
import NewFeatures from './NewFeatures/NewFeatures';

/**
 *  @return : Element, returns Home Elements
 *  @includes : Homepage components
 */
function Home() {

    return (

        <div>

            {/* the main part of homepage */}
            <HomeMain />

            {/* the most popular calculators part */}
            <PopularCalculators />

            {/* adding new features */}
            <NewFeatures />

        </div>
    );

}

export default Home;
