/**
 *  @collections : array of collections
 */
const Collections = [
    {
        en: {
            name: 'Algebra',
            description: 'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables.'
        },
        kr: {
            name: 'زانستی جەبر',
            description: 'زانستی جەبر لقێکە لە بیرکاری کە کاردەکات لەگەڵ هێماکان و یاساکانی چارەسەرکردنی ئەو هێمایانە. لە زانستی جەبری سەرەتایی، ئەو هێمایانە (لەئێستایا بە پیتی یۆنانی ئەنوسرێن) گوزارشت لە بڕی بەها ناجێگیر ئەکەن، کە ناسراون بە گۆڕدراو.'
        },
        urlName: 'algebra',
        keywords: [
            'algebra', 'proportion ratio', 'equation solver', 'prime checker', 'factor', 'operation', 'simplify', 'constants', 'symbols',
            'elementary', 'quantity', 'quantities', 'variables',
            'جەبر', 'زانستی جەبر', 'ڕێژەی تێکڕا', 'شیکارکەری هاوکێشە', 'پشکنەری ژمارەی خۆبەش', 'هۆکار', 'ئاسانکاری',
            'سەرەتایی', 'چەندێتی', 'گۆڕاوەکان',
        ],
        calculatorsUrlName: [
            'proportion-ratio', 'equation-solver', 'prime-checker'
        ]
    },
    {
        en: {
            name: 'Unit Conversion',
            description: 'Conversion of Units is a multi-step process that converts units of measurement for the same quantity.'
        },
        kr: {
            name: 'گۆڕانکاری یەکەکان',
            description: 'گۆڕانکاری یەکەکان پڕۆسەیەکی چەند هەنگاویە کە یەکەکان ئەگۆڕێت بۆ هەمان بڕ.'
        },
        urlName: 'unit-conversion',
        keywords: [
            'unit conversion', 'convertor', 'units', 'measurments', 'weight', 'volume', 'power', 'area', 'length', 'force', 'time', 'speed', 'angle',
            'tempreature', 'digital storage', 'quantity', 'quantities',
            'گۆڕانکاری یەکەکان', 'یەکە', 'پێوانە', 'کێش', 'قەبارە', 'توانا', 'ڕووبەر', 'درێژی', 'هێز', 'کات', 'خێرایی', 'گۆشە',
            'پلەی گەرمی', 'کۆگای دیجیتاڵی', 'چەندێتی',
        ],
        calculatorsUrlName: [
            'weight', 'volume', 'power', 'area', 'length', 'force', 'time', 'speed', 'angle', 'tempreature', 'digital-storage'
        ]
    },
    {
        en: {
            name: 'Geometry',
            description: 'Geometry is a branch of mathematics that deals with the measurement, properties, and relationships of points, lines, angles, surfaces, and solids.'
        },
        kr: {
            name: 'ئەندازەگەری',
            description: 'ئەندازە گەری لقێکە لە بیرکاری کە  کاردەکات لەگەڵ پێوانەکردن، تایبەتمەندیەکان، وە پەیوەندی نێوان خاڵەکان، هێڵەکان، گۆشەکان، ڕووەکان، و مادە رەقەکان.'
        },
        urlName: 'geometry',
        keywords: [
            'geometry', 'shapes', 'measurment', 'properties', 'points', 'lines', 'engineering', 'circle', 'square', 'rectangle',
            'ئەندازەگەری', 'شێوەکان', 'تایبەتمەندیەکان', 'خاڵەکان', 'هێڵەکان', 'ئەندازیاری', 'بازنە', 'چوارگۆشە', 'لاکێشە'
        ],
        calculatorsUrlName: [
            'circle', 'square', 'rectangle'
        ]
    }
]





/**
 * getting all collections
 * 
 * @returns {Array} : all collections
 */
function getAllCollections() {
    return [...Collections]
}


export default getAllCollections