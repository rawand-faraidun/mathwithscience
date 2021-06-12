// importing calculators components
import ProportionRatio from './calculators-components/Proportion-Ratio/Proportion-Ratio';
import EquationSolver from './calculators-components/equation-solver/Equation-Solver';
import PrimeChecker from './calculators-components/Prime-Checker/Prime-Checker';
import Weight from './calculators-components/Weight/Weight';
import Volume from './calculators-components/Volume/Volume';
import Power from './calculators-components/Power/Power';
import Area from './calculators-components/Area/Area';
import Length from './calculators-components/Length/Length';

/**
 *  @Calculators : array of calculators
 */
const Calculators = [
    {
        en: {
            name: 'Proportion Ratio',
            description: 'Proportion Ratio states that two fractions on each side of an equation are equal'
        },
        kr: {
            name: 'ڕێژەی تێکڕا',
            description: 'ڕێژەی تێکڕا پشت ڕاست دەکاتەوە کە دوو کەرت لە هەردوولای هاوکێشەیەک یەکسانن'
        },
        urlName: 'proportion-ratio',
        keywords: [
            'proportion ratio'
        ],
        component: <ProportionRatio />
    },
    {
        en: {
            name: 'Equation Solver',
            description: 'Consisting generally of two expressions related by an equals sign. When seeking a solution, one or more variables are designated as unknowns'
        },
        kr: {
            name: 'شیکارکەری هاوکێشە',
            description: 'بە گشتی پێک دێ لە دوو دەربڕین کە پەیوەندی یەکسان لە نێوانیان هەیە. کاتێک بۆ ئەنجام ئەگەڕێن گۆڕدراوێک یان زیاتر بە نەنزانراو دیاریئەکرێن'
        },
        urlName: 'equation-solver',
        keywords: [
            'equation solver',
        ],
        component: <EquationSolver />
    },
    {
        en: {
            name: 'Prime Checker',
            description: 'A place to test if a number is prime or not'
        },
        kr: {
            name: 'پشکنەری ژمارەی خۆبەش',
            description: 'شوێنێک بۆ تاقیکردنەوەی ئایا ژمارەیەک خۆبەشە یاخود نا'
        },
        urlName: 'prime-checker',
        keywords: [
            'prime checker',
        ],
        component: <PrimeChecker />
    },
    {
        en: {
            name: 'Weight',
            description: 'Convert weight from any unit to other ones'
        },
        kr: {
            name: 'كێش',
            description: 'کێش لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر'
        },
        urlName: 'weight',
        keywords: [
            'weight',
        ],
        component: <Weight />
    },
    {
        en: {
            name: 'Volume',
            description: 'Convert volume from any unit to other ones'
        },
        kr: {
            name: 'قەبارە',
            description: 'قەبارە لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر'
        },
        urlName: 'volume',
        keywords: [
            'volume',
        ],
        component: <Volume />
    },
    {
        en: {
            name: 'Power',
            description: 'Convert power from any unit to other ones'
        },
        kr: {
            name: 'توانا',
            description: 'توانا لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر'
        },
        urlName: 'power',
        keywords: [
            'power',
        ],
        component: <Power />
    },
    {
        en: {
            name: 'Area',
            description: 'Convert area from any unit to other ones'
        },
        kr: {
            name: 'ڕووبەر',
            description: 'ڕووبەر لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر'
        },
        urlName: 'area',
        keywords: [
            'area',
        ],
        component: <Area />
    },
    {
        en: {
            name: 'Length',
            description: 'Convert length from any unit to other ones'
        },
        kr: {
            name: 'درێژی',
            description: 'درێژی لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر'
        },
        urlName: 'length',
        keywords: [
            'length',
        ],
        component: <Length />
    }
];



// getting all collections
function getAllCalculators() {
    return [...Calculators];
}


export default getAllCalculators;