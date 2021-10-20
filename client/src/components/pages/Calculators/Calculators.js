import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import './calculators.css'
import ListView from '../others/List-View/List-View'
import languageHelper from '../../partials/helpers/Language'
import NotFound404 from '../others/Not-Found-404/Not-Found-404'
import CalculatorPage from '../others/Calculator-Page/Calculator-Page'
const Calculators = require('../../DATA/Calculators')



// component content
const componentContent = {
    en: {
        title: 'Calculators',
        description: 'list of all Calculators'
    },
    kr: {
        title: 'ژمێرەرەکان',
        description: 'لیستی ژمێرەرەکان'
    }
}




/**
 *  @return {Element} : calculators route
 */
function CalculatorsRoutes() {

    // getting params of the route
    const route = useParams()





    // if there was no params from the route, then it must be root calculators list view
    if (!route.calculatorUrlName) {

        return (
            <>
                {/* overriding document head */}
                <Helmet>
                    <title>{componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science</title>
                    <meta name="description" content="List of all calculators provieded by Math with Science." />
                    <meta name="keywords" content="math with science, math, science, online calculator, all calculators, list of all math with science calculators" />

                    <meta property="og:title" content={`${componentContent[languageHelper.getLanguageSymbol()].title} | Math with Science`} />
                    <meta property="og:description" content="List of all calculators provieded by Math with Science." />
                    <meta property="og:url" content={window.location.href} />
                </Helmet>


                {/* claculators */}
                <div className="calculators long-element" dir={languageHelper.getDirection()}>

                    {/* wecan make a header title and description for calculators, but it is easier to be with the List-View when we use it in different places */}

                    {/* collections list */}
                    <ListView
                        header={{
                            title: componentContent[languageHelper.getLanguageSymbol()].title,
                            description: componentContent[languageHelper.getLanguageSymbol()].description
                        }}
                        list={Calculators.find({
                            language: true,
                            removeComponent: true,
                            changeUrl: 'calculators',
                            sort: { sortingLanguage: languageHelper.getLanguageSymbol() },
                            briefDescription: 150
                        })}
                    />

                </div>
            </>
        )
    }





    // if there was calculatorUrlName, then it is a calculator page
    if (route.calculatorUrlName) {

        // getting the collection choosen in the url
        const calculator = Calculators.findOne({ urlName: route.calculatorUrlName })

        // checking if the collection was vailed
        if (calculator === undefined) {
            return <NotFound404 invailedUrl={`calculators/${route.calculatorUrlName}`}
                customButton={{ name: 'calculators', url: '/calculators' }} />
        }


        return (
            <>
                <div className="calculators long-element">

                    {/* Getting wanted calculator */}
                    <CalculatorPage calculatorData={calculator} haveHeader useHelmet />

                </div>
            </>
        )
    }
}

export default CalculatorsRoutes
