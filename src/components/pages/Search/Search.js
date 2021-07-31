import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './search.css'
import ListView from '../others/ListView/ListView'
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
    const collections = Collections.find({ searchQuery: route.searchText, changeUrl: 'collections' })
    const calculators = Calculators.find({ searchQuery: route.searchText, changeUrl: 'calculators' })

    return (
        <>

            {/* overriding document head */}
            <Helmet>
                <title>{componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science</title>
                <meta name="description" content={`${componentContent[languageHelper.getLanguageSymbol()].description}`} />
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
