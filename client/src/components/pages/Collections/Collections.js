import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './collections.css'
import languageHelper from '../../partials/helpers/Language'
import ListView from '../others/List-View/List-View'
import CalculatorPage from '../others/Calculator-Page/Calculator-Page'
import NotFound404 from '../others/Not-Found-404/Not-Found-404'
const Collections = require('../../DATA/Collections')
const Calculators = require('../../DATA/Calculators')



// component content
const componentContent = {
    en: {
        title: 'Collections',
        description: 'list of all Collections'
    },
    kr: {
        title: 'لقەکان',
        description: 'لیستی لقەکان'
    }
}



/**
 *  @return {Element} : Collections route
 */
export default function CollectionsRoutes() {

    // getting params of the route
    const route = useParams()





    // if there was no params from the route, it is root calculations list view
    if (!route.collectionUrlName && !route.calculatorUrlName) {

        return (
            <>
                {/* overriding document head */}
                <Helmet>
                    <title>{componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science</title>
                    <meta name="description" content="List of all collections provieded by Math with Science." />
                    <meta name="keywords" content="math with science, math, science, online calculator, all collections, list of all math with science collections" />

                    <meta property="og:title" content={`${componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science`} />
                    <meta property="og:description" content="List of all collections provieded by Math with Science." />
                    <meta property="og:url" content={window.location.href} />
                </Helmet>


                {/* collections */}
                <div className="collections long-element" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for collections, but it is easier to be with the List-View when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: componentContent[languageHelper.getLanguageSymbol()].title,
                            description: componentContent[languageHelper.getLanguageSymbol()].description
                        }}
                        list={Collections.find({
                            language: true,
                            changeUrl: 'collections',
                            sort: { sortingLanguage: languageHelper.getLanguageSymbol() },
                            briefDescription: 150
                        })}
                    />

                </div>
            </>
        )
    }





    // if there was only collectionUrlName, it is the list of a specific collection
    if (route.collectionUrlName && !route.calculatorUrlName) {

        // getting the collection choosen in the url
        const collection = Collections.findOne({ urlName: route.collectionUrlName })

        // checking if the collection was vailed
        if (collection === undefined) {
            return <NotFound404 invailedUrl={`collections/${route.collectionUrlName}`}
                customButton={{ name: 'Collections', url: '/collections' }} />
        }


        // getting the collection calculators
        const calculators = Calculators.findIn({
            list: collection.calculatorsUrlName,
            language: true,
            removeComponent: true,
            changeUrl: `collections/${collection.urlName}`,
            sort: { sortingLanguage: languageHelper.getLanguageSymbol() },
            briefDescription: 150
        })

        return (
            <>
                {/* overriding document head */}
                <Helmet>
                    <title>{collection[languageHelper.getLanguageSymbol()].name} | Math with Science</title>
                    <meta name="description" content={collection[languageHelper.getLanguageSymbol()].description} />
                    <meta name="keywords"
                        content={`math with science, math, science, online calculator, about math with science, about the developers, ${collection.keywords.toString()}`}
                    />

                    <meta property="og:title" content={`${collection[languageHelper.getLanguageSymbol()].name} | Math with Science`} />
                    <meta property="og:description" content={collection[languageHelper.getLanguageSymbol()].description} />
                    <meta property="og:url" content={window.location.href} />
                </Helmet>


                {/* calculators */}
                <div className="collection-calculators long-element" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for the collection, but it is easier to be with the List-View when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: collection[languageHelper.getLanguageSymbol()].name,
                            description: collection[languageHelper.getLanguageSymbol()].description
                        }}
                        list={calculators}
                    />

                </div>
            </>
        )
    }





    // if there both params, so it a calculator in a collection
    if (route.collectionUrlName && route.calculatorUrlName) {

        // getting the collection choosen in the url
        const collection = Collections.findOne({ urlName: route.collectionUrlName, language: true })

        // checking if the collection was vailed
        if (collection === undefined) {
            return <NotFound404 invailedUrl={`collections/${route.collectionUrlName}/${route.calculatorUrlName}`}
                customButton={{ name: 'Collections', url: '/collections' }} />
        }


        // getting the collection choosen in the url
        const calculator = Calculators.findOne({ urlName: route.calculatorUrlName })

        // checking if the collection was vailed
        if (calculator === undefined) {
            return <NotFound404 invailedUrl={`collections/${route.collectionUrlName}/${route.calculatorUrlName}`}
                customButton={{ name: collection[languageHelper.getLanguageSymbol()].name, url: `/collections/${collection.urlName}` }} />
        }


        return (
            <>
                <div className="collection-calculator long-element">

                    {/* Getting wanted calculator */}
                    <CalculatorPage calculatorData={calculator} haveHeader useHelmet />

                </div>
            </>
        )

    }
}