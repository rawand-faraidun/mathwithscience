import React from 'react';
import { Helmet } from "react-helmet";

// importing styling
import './show-calculator.css';

// importing Components
import languageHelper from '../../partials/languageHelper';


/**
 * @props :
 *      @haveHeader : {Boolean}, determines if content have details header or not
 *      @useHelmet : {Boolean}, determines if using react-helmet or not
 * 
 *  @return {Element} : calculator show page
 */
function showCalculator(props) {


    return (
        <>
            {/* overriding page head */}
            {/* it will only happen if useHelmet property excists and true */}
            {props.useHelmet ? (
                <Helmet>
                    <title>{props.calculatorData.en.name} | Math with Science</title>
                    <meta name="description" content={props.calculatorData[languageHelper.getLanguageSymbol()].description} />
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


                {/* showing calculator page */}
                {props.calculatorData.component}

            </div>
        </>
    );
}


export default showCalculator;