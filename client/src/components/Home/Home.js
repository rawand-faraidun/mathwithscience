import React from 'react';
import { Helmet } from "react-helmet";

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
            {/* overriding page head */}
            <Helmet>
                <title>Math with Science | free helping website with math and science problems</title>
                <meta name="description" content="Math with Science is a website to help anyone with theit math problems" />
            </Helmet>


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
