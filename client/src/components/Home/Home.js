import React from 'react';

// importing Branchs
import HomeMain from './HomeMain/HomeMain';
import PopularCalculators from './PopularCalculators/PopularCalculators';

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

        </div>
    );

}

export default Home;
