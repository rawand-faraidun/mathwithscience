import React from 'react'
import { Helmet } from 'react-helmet'

import './calculator-defaults.css'
import './calculator-page.css'
import languageHelper from '../../../partials/helpers/Language'


/**
 * @param {Object} props :
 *      @useHelmet {Boolean} : determines if using react-helmet
 *      @haveHeader {Boolean} : determines if content have details header
 *      @calculatorData {Object} : data of the calculator
 * 
 *  @return {Element} : calculator show page element
 */
export default function CalculatorPage(props) {

    return (
        <>
            {/* overriding document head */}
            {/* it will only happen if useHelmet property excists and true */}
            {props.useHelmet ? (
                <Helmet>
                    <title>{props.calculatorData.en.name} | Math with Science</title>
                    <meta name="description" content={props.calculatorData[languageHelper.getLanguageSymbol()].description} />
                    <meta name="keywords"
                        content={`math with science, math, science, online calculator, about math with science, about the developers, ${props.calculatorData.keywords.toString()}`}
                    />

                    <meta property="og:title" content={`${props.calculatorData.en.name} | Math with Science`} />
                    <meta property="og:description" content={props.calculatorData[languageHelper.getLanguageSymbol()].description} />
                    <meta property="og:url" content={window.location.href} />
                </Helmet>
            ) : ''}


            {/* calculator page */}
            <div className="calculator-page" dir={languageHelper.getDirection()}>

                {/* calculator page headers */}
                {/* it will only show if haveHeader property excists and true */}
                {props.haveHeader ? (
                    <div className="calculator-page-header">

                        {/* list view title */}
                        <h1 className={`calculator-page-title ${languageHelper.getClass()}`}>{props.calculatorData[languageHelper.getLanguageSymbol()].name}</h1>

                        {/* list view title */}
                        <p className={`calculator-page-description ${languageHelper.getClass()}`}>{props.calculatorData[languageHelper.getLanguageSymbol()].description}</p>
                    </div>
                ) : ''}


                {/* calculator component */}
                {props.calculatorData.component}

            </div>
        </>
    )
}