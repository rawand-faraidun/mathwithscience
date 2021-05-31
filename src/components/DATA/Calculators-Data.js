// importing calculators components
import ProportionRatio from './calculators-pages/Proportion-Ratio/Proportion-Ratio';

/**
 *  @Calculators : array of calculators
 */
const Calculators = [
    {
        en: {
            "name": "Proportion Ratio",
            "description": "Proportion Ratio states that two fractions on each side of an equation are equal."
        },
        kr: {
            "name": "ڕێژەی تێکڕا",
            "description": "ڕێژەی تێکڕا پشت ڕاست دەکاتەوە کە دوو کەرت لە هەردوولای هاوکێشەیەک یەکسانن"
        },
        urlName: "proportion-ratio",
        keywords: [
            "proportion ratio"
        ],
        component: <ProportionRatio />
    }
];



// getting all collections
function getAllCalculators() {
    return [...Calculators];
}


export default getAllCalculators;