// calculators components
import ProportionRatio from './calculators-components/Proportion-Ratio/Proportion-Ratio'
import EquationSolver from './calculators-components/Equation-Solver/Equation-Solver'
import PrimeChecker from './calculators-components/Prime-Checker/Prime-Checker'
import Weight from './calculators-components/Weight/Weight'
import Volume from './calculators-components/Volume/Volume'
import Power from './calculators-components/Power/Power'
import Area from './calculators-components/Area/Area'
import Length from './calculators-components/Length/Length'
import Force from './calculators-components/Force/Force'
import Time from './calculators-components/Time/Time'
import Speed from './calculators-components/Speed/Speed'
import Angle from './calculators-components/Angle/Angle'
import Tempreature from './calculators-components/Tempreature/Tempreature'
import DigitalStorage from './calculators-components/Digital-Storage/Digital-Storage'
import Circle from './calculators-components/Circle/Circle'
import Square from './calculators-components/Square/Square'
import Rectangle from './calculators-components/Rectangle/Rectangle'



/**
 *  @Calculators : array of calculators
 */
const Calculators = [
    {
        en: {
            name: 'Proportion Ratio',
            description: 'Proportion Ratio states that two fractions on each side of an equation are equal.'
        },
        kr: {
            name: 'ڕێژەی تێکڕا',
            description: 'ڕێژەی تێکڕا پشت ڕاست دەکاتەوە کە دوو کەرت لە هەردوولای هاوکێشەیەک یەکسانن.'
        },
        urlName: 'proportion-ratio',
        keywords: [
            'algebra', 'proportion ratio', 'equality', 'fractions', 'equations', 'direct proportion', 'indirect proportion',
            'زانستی جەبر', 'دوولاودوونێوان', 'دوولا و دوونێوان', 'ڕێژەی تێکڕا', 'یەکسانی', 'دابەشکاری', 'هاوکێشەکان'
            , 'ڕێژەی ڕاستەوخۆ', 'ڕێژەی ناڕاستەوخۆ'
        ],
        component: <ProportionRatio />
    },
    {
        en: {
            name: 'Equation Solver',
            description: 'Consisting generally of two expressions related by an equals sign. When seeking a solution, one or more variables are designated as unknowns.'
        },
        kr: {
            name: 'شیکارکەری هاوکێشە',
            description: 'بە گشتی پێک دێ لە دوو دەربڕین کە پەیوەندی یەکسان لە نێوانیان هەیە. کاتێک بۆ ئەنجام ئەگەڕێن گۆڕدراوێک یان زیاتر بە نەنزانراو دیاریئەکرێن.'
        },
        urlName: 'equation-solver',
        keywords: [
            'algebra', 'equation solver', 'solutions', 'unknowns', 'variable', 'term', 'constants', 'linear', 'quadratic', 'power',
            'زانستی جەبر', 'شیکارکەری هاوکێشە', 'وەڵامەکان', 'نادیارەکان', 'گۆڕاوەکان', 'زاراوەکان', 'نەگۆڕەکان', 'هێڵی', 'چواری', 'توان'
        ],
        component: <EquationSolver />
    },
    {
        en: {
            name: 'Prime Checker',
            description: 'A place to test if a number is prime or not.'
        },
        kr: {
            name: 'پشکنەری ژمارەی خۆبەش',
            description: 'شوێنێک بۆ تاقیکردنەوەی ئایا ژمارەیەک خۆبەشە یاخود نا.'
        },
        urlName: 'prime-checker',
        keywords: [
            'algebra', 'prime checker', 'prime numbers',
            'زانستی جەبر', 'پشکنەری ژمارەی خۆبەش'
        ],
        component: <PrimeChecker />
    },
    {
        en: {
            name: 'Weight',
            description: 'Convert weight from any unit to other ones.'
        },
        kr: {
            name: 'كێش',
            description: 'کێش لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'weight',
        keywords: [
            'unit conversion', 'convertor', 'weight', 'gram', 'kilogram', 'milligram', 'nanogram', 'microgram', 'centigram', 'decigram', 'hectometer', 'ton',
            'pound', 'ounce',
            'گۆڕانکاری یەکەکان', 'کێش', 'گرام', 'کیلۆگرام', 'میلیگرام', 'نانۆگرام', 'مایکرۆگرام', 'سانتیگرام', 'دەسیگرام', 'هێکتۆگرام', 'تەن',
            'پاوەند', 'ئۆنج',
        ],
        component: <Weight />
    },
    {
        en: {
            name: 'Volume',
            description: 'Convert volume from any unit to other ones.'
        },
        kr: {
            name: 'قەبارە',
            description: 'قەبارە لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'volume',
        keywords: [
            'algebra', 'volume', 'meter', 'kilometer', 'liter', 'milliliter', 'millimeter', 'centimeter', 'decimeter', 'hectometer', 'inch',
            'foot', 'mile',
            'گۆڕانکاری یەکەکان', 'قەبارە', 'مەتر', 'کیلۆمەتر', 'لیتر', 'میلیلیتر', 'میلیمەتر', 'سانتیمەتر', 'دەسیمەتر', 'هێستومەتر', 'ئینچ',
            'پێ', 'میل',
        ],
        component: <Volume />
    },
    {
        en: {
            name: 'Power',
            description: 'Convert power from any unit to other ones.'
        },
        kr: {
            name: 'توانا',
            description: 'توانا لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'power',
        keywords: [
            'unit conversion', 'convertor', 'power', 'watt', 'kilowatt', 'megawatt', 'milliwatt', 'horse power',
            'گۆڕانکاری یەکەکان', 'هێز', 'وات', 'کیلۆوات', 'مێگاوات', 'میلیوات', 'هێزی ئەسپ'
        ],
        component: <Power />
    },
    {
        en: {
            name: 'Area',
            description: 'Convert area from any unit to other ones.'
        },
        kr: {
            name: 'ڕووبەر',
            description: 'ڕووبەر لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'area',
        keywords: [
            'unit conversion', 'convertor', 'area', 'meter', 'kilometer', 'millimeter', 'centimeter', 'decimeter', 'hectometer', 'inch', 'foot', 'mile',
            'گۆڕانکاری یەکەکان', 'ڕووبەر', 'مەتر', 'کیلۆمەتر', 'میلی مەتر', 'سانتیمەتر', 'دەسیمەتر', 'هیچتۆمەتر', 'ئینچ', 'پێ', 'میل',
        ],
        component: <Area />
    },
    {
        en: {
            name: 'Length',
            description: 'Convert length from any unit to other ones.'
        },
        kr: {
            name: 'درێژی',
            description: 'درێژی لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'length',
        keywords: [
            'unit conversion', 'convertor', 'length', 'meter', 'kilometer', 'millimeter', 'nanometer', 'micrometer', 'centimeter', 'decimeter', 'decameter',
            'hectometer', 'inch', 'foot', 'mile',
            'گۆڕانکاری یەکەکان', 'درێژی', 'مەتر', 'کیلۆمەتر', 'میلیمەتر', 'نانۆمەتر', 'میکرۆمەتر', 'سانتیمەتر', 'دەسیمەتر', 'دێکامەتر',
            'هێتۆمەتر', 'ئینچ', 'پێ', 'میل',
        ],
        component: <Length />
    },
    {
        en: {
            name: 'Force',
            description: 'Convert force from any unit to other ones.'
        },
        kr: {
            name: 'هێز',
            description: 'هێز لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'force',
        keywords: [
            'unit conversion', 'convertor', 'force', 'newton', 'kilogram force', 'gram force', 'dyne', 'pound force',
            'گۆڕانکاری یەکەکان', 'هێز', 'نیوتن', 'هێزی کیلۆگرام', 'هێزی گرام', 'داین', 'هێزی پاوەند'
        ],
        component: <Force />
    },
    {
        en: {
            name: 'Time',
            description: 'Convert time from any unit to other ones.'
        },
        kr: {
            name: 'کات',
            description: 'کات لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'time',
        keywords: [
            'unit conversion', 'convertor', 'time', 'second', 'millisecond', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century',
            'گۆڕانکاری یەکەکان', 'کات', 'چرکە', 'میلی چرکە', 'خولەک', 'کاتژمێر', 'ڕۆژ', 'هەفتە', 'مانگ', 'ساڵ', 'دەیە', 'سەدە',
        ],
        component: <Time />
    },
    {
        en: {
            name: 'Speed',
            description: 'Convert speed from any unit to other ones.'
        },
        kr: {
            name: 'خێرایی',
            description: 'خێرایی لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'speed',
        keywords: [
            'unit conversion', 'convertor', 'speed', 'kilometer / hour', 'meter / second', 'mile / hour', 'foot / second', 'lightspeed', 'knot',
            'گۆڕانکاری یەکەکان', 'خێرایی', 'کیلۆمەتر / کاتژمێر', 'مەتر / چرکە', 'میل / کاتژمێر', 'پێ / چرکە', 'خێرایی ڕوناکی', 'نۆت'
        ],
        component: <Speed />
    },
    {
        en: {
            name: 'Angle',
            description: 'Convert angle from any unit to other ones.'
        },
        kr: {
            name: 'گۆشە',
            description: 'گۆشە لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'angle',
        keywords: [
            'unit conversion', 'convertor', 'angle', 'digree', 'radiant', 'turn', 'sextant', 'quadrant',
            'گۆڕانکاری یەکەکان', 'گۆشە', 'پلە', 'ڕادیەنت', 'خول', 'شەشبەش', 'چواربەش',
        ],
        component: <Angle />
    },
    {
        en: {
            name: 'Tempreature',
            description: 'Convert tempreature from any unit to other ones.'
        },
        kr: {
            name: 'پلەی گەرمی',
            description: 'پلەی گەرمی لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'tempreature',
        keywords: [
            'unit conversion', 'convertor', 'tempreature', 'celcuis', 'fahrenheit', 'kelvin', 'rankine', 'newton',
            'گۆڕانکاری یەکەکان', 'پلەی گەرمی', 'سیلیزی', 'فەهرەنهایت', 'کلڤن', 'ڕانکین', 'نیوتن',
        ],
        component: <Tempreature />
    },
    {
        en: {
            name: 'Digital Storage',
            description: 'Convert digital storage from any unit to other ones.'
        },
        kr: {
            name: 'کۆگای دیجیتاڵی',
            description: 'کۆگای دیجیتاڵی (قەبارەی هەڵگرتنی دەیتا) لە یەکەیەکەوە بگۆڕە بۆ هەریەکەیەکی تر.'
        },
        urlName: 'digital-storage',
        keywords: [
            'unit conversion', 'convertor', 'digital storage', 'bit', 'kilobit', 'megabit', 'gigabit', 'terabit', 'petabit', 'byte', 'kilobyte', 'megabyte',
            'gigabyte', 'terabyte', 'petabyte',
            'گۆڕانکاری یەکەکان', 'کۆگای دیجیتاڵ', 'بیت', 'کیلۆبیت', 'مگابیت', 'گیگابیت', 'تێرابیت', 'پێتابیت', 'بایت', 'کیلۆبایت', 'مێگابایت',
            'گێگابایت', 'تێرابایت', 'پێتابایت',
        ],
        component: <DigitalStorage />
    },
    {
        en: {
            name: 'Circle',
            description: 'Calculate any property of circle.'
        },
        kr: {
            name: 'بازنە',
            description: 'هەژماری هەر تایبەتمەندیەکی بازنە بکە.'
        },
        urlName: 'circle',
        keywords: [
            'geometry', 'shapes', 'circle', 'raidus', 'diameter', 'area', 'circumference',
            'ئەندازەگەری', 'شێوەکان', 'بازنە', 'نیوە تیرە', 'تیرە', 'ڕووبەر', 'چێوە',
        ],
        component: <Circle />
    },
    {
        en: {
            name: 'Square',
            description: 'Calculate any property of square.'
        },
        kr: {
            name: 'چوارگۆشە',
            description: 'هەژماری هەر تایبەتمەندیەکی چوارگۆشە بکە.'
        },
        urlName: 'square',
        keywords: [
            'geometry', 'shapes', 'square', 'side', 'diagonal', 'area', 'perimeter',
            'ئەندازەگەری', 'شێوەکان', 'چوارگۆشە', 'لا', 'تیرە', 'ڕووبەر', 'چێوە',
        ],
        component: <Square />
    },
    {
        en: {
            name: 'Rectangle',
            description: 'Calculate any property of rectangle.'
        },
        kr: {
            name: 'لاکێشە',
            description: 'هەژماری هەر تایبەتمەندیەکی لاکێشە بکە.'
        },
        urlName: 'rectangle',
        keywords: [
            'geometry', 'shapes', 'rectangle', 'width', 'length', 'diagonal', 'area', 'perimeter',
            'ئەندازەگەری', 'شێوەکان', 'چوارگۆشە', 'پانی', 'درێژی', 'تیرە', 'ڕووبەر', 'چێوە',
        ],
        component: <Rectangle />
    },
]





/**
 * getting all calculators
 * 
 * @returns {Array} : all calculators
 */
function getAllCalculators() {
    return [...Calculators]
}


export default getAllCalculators