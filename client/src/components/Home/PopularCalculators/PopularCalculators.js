import React from 'react';

// importing stylings
import './popular-calculators.css';

// importing components
import languageHelper from '../../partials/languageHelper';



// page content all languages
const componentContent = {
    title: {
        en: 'Most Popular Calculators',
        kr: 'ژمێرەرە زۆر بەکارهاتوەکان',
    },
    calculators: [
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 1', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 1', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 2', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 2', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 3', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 3', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 4', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 4', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 5', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 5', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 6', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 6', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'proportion-ratio',
            en: { name: 'Proportion Ratio 7', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'ڕێژەی تێکڕا 7', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        }
    ]
}



/**
 *  @return {Element} : popular calculators section
 */
function PopularCalculators() {

    return (
        <>
            {/* popular calclators */}
            <div className="popular-calculators" dir={languageHelper.getDirection()}>

                {/* popular calculators title */}
                <h2 className={`popular-calculators-title ${languageHelper.getClass()}`}>{componentContent.title[languageHelper.getLanguageSymbol()]}</h2>

                {/* popular calculators grid */}
                <div className="popular-calculators-grid">

                    {/* each calculator */}
                    {componentContent.calculators.map((calculator, i) =>
                        <a href={`/all-calculators/${calculator.urlName}`} className="calculator" key={i}>

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
