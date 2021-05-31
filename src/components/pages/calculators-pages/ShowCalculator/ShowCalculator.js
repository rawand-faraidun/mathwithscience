import React from 'react';
import { Helmet } from "react-helmet";

// importing styling
import './show-calculator.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';

// importing calculators pages
import ProportionRatio from '../Proportion-Ratio/Proportion-Ratio';

// importing datas
const Calculators = require('../../../DATA/Calculators');



/**
 * @props :
 *      @haveHeader : {Boolean}, determines if content have details header or not
 *      @useHelmet : {Boolean}, determines if using react-helmet or not
 * 
 *  @return {Element} : calculator show page
 */
function showCalculator(props) {

    let calculator = Calculators.findOne({ urlName: props.urlName });

    // checking if the calculator excists
    if (calculator === undefined) {
        /**
        * @todo add 404 not found here
        */

        console.log('undefined collection');
        return (
            <>
                <div className="undefined" style={{ marginTop: 'var(--first-element-margin-top)' }}>
                    <h1>undefined collection</h1>
                </div>
            </>
        );
    }


    return (
        <>
            {/* overriding page head */}
            {/* it will only happen if useHelmet property excists and true */}
            {props.useHelmet ? (
                <Helmet>
                    <title>{calculator.en.name} | Math with Science</title>
                    <meta name="description" content={calculator[languageHelper.getLanguageSymbol()].description} />
                </Helmet>
            ) : ''}


            {/* calculator page */}
            <div className="calculator-page" dir={languageHelper.getDirection()}>

                {/* calculator page headers */}
                {/* it will only show if haveHeader property excists and true */}
                {props.haveHeader ? (
                    <div className="calculator-page-header">

                        {/* list view title */}
                        <h1 className={`calculator-page-title ${languageHelper.getClass()}`}>{calculator[languageHelper.getLanguageSymbol()].name}</h1>

                        {/* list view title */}
                        <p className={`calculator-page-description ${languageHelper.getClass()}`}>{calculator[languageHelper.getLanguageSymbol()].description}</p>
                    </div>
                ) : ''}


                {/* showing calculator page */}
                {getCalculatorPage(calculator.urlName)}

            </div>
        </>
    );
}



/**
 * @props :
 *      @urlName : {String}, deterines to return which calculator page
 * 
 *  @return {Element} : calculator page
 */
function getCalculatorPage(urlName) {

    // checks for the page by name
    switch (urlName) {
        case 'proportion-ratio':
            return <ProportionRatio />;

        default:
            return <h1>undefined collection</h1>;
    }
}


export default showCalculator;
export { getCalculatorPage };