import React from 'react'
import { Link } from 'react-router-dom'

import './popular-calculators.css'
import languageHelper from '../../../partials/languageHelper'
const Calculators = require('../../../DATA/Calculators')



// component content
const componentContent = {
    en: 'Popular Calculators',
    kr: 'ژمێرەرە بەکارهاتوەکان',

}



/**
 *  @return {Element} : popular calculators element
 */
export default function PopularCalculators() {

    // getting the calculators
    const calculators = Calculators.find({ language: true, removeComponent: true, limit: 12 })


    return (
        <>
            {/* popular calclators */}
            <div className="popular-calculators" dir={languageHelper.getDirection()}>

                {/* popular calculators title */}
                <h2 className={`popular-calculators-title ${languageHelper.getClass()}`}>
                    {componentContent[languageHelper.getLanguageSymbol()]}
                </h2>

                {/* popular calculators grid */}
                <div className="popular-calculators-grid">

                    {/* each calculator */}
                    {calculators.map((calculator, i) =>
                        <Link to={`/calculators/${calculator.urlName}`} className="calculator" key={i}>

                            {/* calculator title */}
                            <h3 className={`calculator-name ${languageHelper.getClass()}`}>
                                {calculator[languageHelper.getLanguageSymbol()].name}
                            </h3>

                            {/* calculator description */}
                            <p className={`calculator-description ${languageHelper.getClass()}`}>
                                {`${calculator[languageHelper.getLanguageSymbol()].description.substring(0, 100)}...`}
                            </p>
                        </Link>
                    )}
                </div>

            </div>
        </>
    )

}