import React from 'react'
import { Helmet } from 'react-helmet'

import HomeMain from './HomeMain/HomeMain'
import PopularCalculators from './PopularCalculators/PopularCalculators'
import NewFeatures from './NewFeatures/NewFeatures'



/**
 *  @return {Element} : homepage element
 */
export default function Home() {

    return (
        <>
            {/* overriding document head */}
            <Helmet>
                <title>Math with Science | free helping website with math and science problems</title>
                <meta name="description" content="Math with Science is a website to help anyone with theit math problems." />
                <meta name="keywords" content="math with science, math, science, online calculator" />

                <meta property="og:title" content="Math with Science | free helping website with math and science problems" />
                <meta property="og:description" content="Math with Science is a website to help anyone with theit math problems." />
                <meta property="og:url" content={window.location.href} />
            </Helmet>


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