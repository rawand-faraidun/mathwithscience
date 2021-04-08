import React, { useState, useEffect } from 'react';
import axios from 'axios';

// importing stylings
import './popular-calculators.css';

// importing components
import languageHelper from '../../partials/languageHelper';



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

    // saving the branches and not letting it rerun
    const [calculators, setCalculators] = useState([]);
    // getting the results of the search
    useEffect(() => {
        axios.get(`/api/calculators/all/${languageHelper.getLanguageSymbol()}`)
            .then((results) => {
                setCalculators(results.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    console.log(calculators);


    return (
        <>
            {/* popular calclators */}
            <div className="popular-calculators" dir={languageHelper.getDirection()}>

                {/* popular calculators title */}
                <h2 className={`popular-calculators-title ${languageHelper.getClass()}`}>{componentContent.title[languageHelper.getLanguageSymbol()]}</h2>

                {/* popular calculators grid */}
                <div className="popular-calculators-grid">

                    {/* each calculator */}
                    {calculators.map((calculator, i) =>
                        <a href={`/calculators/${calculator.urlName}`} className="calculator" key={i}>

                            {/* calculator title */}
                            <h2 className={`calculator-name ${languageHelper.getClass()}`}>{calculator[languageHelper.getLanguageSymbol()].name}</h2>

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
