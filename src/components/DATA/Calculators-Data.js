// importing calculators components
import ProportionRatio from './calculators-components/Proportion-Ratio/Proportion-Ratio';
import EquationSolver from './calculators-components/equation-solver/Equation-Solver';

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
    },
    {
        en: {
            "name": "Equation Solver",
            "description": "Consisting generally of two expressions related by an equals sign. When seeking a solution, one or more variables are designated as unknowns."
        },
        kr: {
            "name": "شیکارکەری هاوکێشە",
            "description": "بە گشتی پێک دێ لە دوو دەربڕینی کە پەیوەندی یەکسان هەیە لە نێوانیان. کاتێک بۆ ئەنجام ئەگەڕێن، گۆڕدراوێک یان زیاتر بە نەنزانراو دیاریئەکرێن"
        },
        urlName: "equation-solver",
        keywords: [
            "equation solver",
        ],
        component: <EquationSolver />
    }
];



// getting all collections
function getAllCalculators() {
    return [...Calculators];
}


export default getAllCalculators;