import React from 'react';

// importing stylings
import './popular-calculators.css';

// importing components
import languageHelper from '../../../partials/languageHelper';

// importing datas
const Calculators = require('../../../DATA/Calculators');



// page content all languages
const componentContent = {
    title: {
        en: 'Most Popular Calculators',
        kr: 'ژمێرەرە زۆر بەکارهاتوەکان',
    }
}



/**
 *  @return {Element} : popular calculators section
 */
function PopularCalculators() {

    // getting the calculators
    const calculators = Calculators.find({ language: true, limit: 12 });


    return (
        <>
            {/* popular calclators */}
            <div className="popular-calculators" dir={languageHelper.getDirection()}>

                {/* popular calculators title */}
                <h2 className={`popular-calculators-title ${languageHelper.getClass()}`}>
                    {componentContent.title[languageHelper.getLanguageSymbol()]}
                </h2>

                {/* popular calculators grid */}
                <div className="popular-calculators-grid">

                    {/* each calculator */}
                    {calculators.map((calculator, i) =>
                        <a href={`/calculators/${calculator.urlName}`} className="calculator" key={i}>

                            {/* calculator title */}
                            <h3 className={`calculator-name ${languageHelper.getClass()}`}>
                                {calculator[languageHelper.getLanguageSymbol()].name}
                            </h3>

                            {/* calculator description */}
                            <p className={`calculator-description ${languageHelper.getClass()}`}>
                                {`${calculator[languageHelper.getLanguageSymbol()].description.substring(0, 100)}...`}
                            </p>
                        </a>
                    )}
                </div>

            </div>
        </>
    );

}

export default PopularCalculators;
