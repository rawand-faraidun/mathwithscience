import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './search.css'
import ListView from '../others/List-View/List-View'
import languageHelper from '../../partials/languageHelper'
const Calculators = require('../../DATA/Calculators')
const Collections = require('../../DATA/Collections')



// component content
const componentContent = {
    en: {
        title: 'Search',
        description: 'list of Search results'
    },
    kr: {
        title: 'گەڕانکردن',
        description: 'لیستی ئەنجامی گەڕانەکە'
    }
}




/**
 *  @return {Element} : Search route
 */
export default function CalculatorsRoutes() {

    // getting params of the route
    const route = useParams()

    // getting the collections and calculators choosen in the url
    const collections = Collections.find({ searchQuery: route.searchText, changeUrl: 'collections', briefDescription: 150, sort: true })
    const calculators = Calculators.find({ searchQuery: route.searchText, changeUrl: 'calculators', briefDescription: 150, removeComponent: true, sort: true })

    return (
        <>
            {/* overriding document head */}
            <Helmet>
                <title>{componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science</title>
                <meta name="description" content={componentContent[languageHelper.getLanguageSymbol()].description} />
                <meta name="keywords" content="math with science, math, science, online calculator, search for calculators and collections" />

                <meta property="og:title" content={`${componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science`} />
                <meta property="og:description" content={componentContent[languageHelper.getLanguageSymbol()].description} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>


            {/* claculators */}
            <div className="search long-element" dir={languageHelper.getDirection()}>

                {/* collections list */}
                <ListView
                    header={{
                        title: componentContent[languageHelper.getLanguageSymbol()].title,
                        description: componentContent[languageHelper.getLanguageSymbol()].description
                    }}
                    list={[...collections, ...calculators]}
                />

            </div>
        </>
    )

}
