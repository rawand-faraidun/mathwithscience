/**
 *  @collections : array of collections
 */
const Collections = [
    {
        en: {
            name: "Algebra",
            description: "Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables."
        },
        kr: {
            name: "زانستی جەبر",
            description: "زانستی جەبر لقێکە لە بیرکاری کە کاردەکات لەگەڵ هێماکان و یاساکانی چارەسەرکردنی ئەو هێمایانە. لە زانستی جەبری سەرەتایی، ئەو هێمایانە (لەئێستایا بە پیتی یۆنانی ئەنوسرێن) گوزارشت لە بڕی بەها ناجێگیر ئەکەن، کە ناسراون بە گۆڕدراو"
        },
        urlName: "algebra",
        keywords: [
            "algebra"
        ],
        calculatorsUrlName: [
            "proportion-ratio", "equation-solver"
        ]
    },
    {
        en: {
            name: "Geometry",
            description: "Geometry is a branch of mathematics that studies the size, shape, position, angle, dimension and any other geometry properties of things."
        },
        kr: {
            name: "ئەندازەگەری",
            description: "ئەندازەگەری بەشێکە لە بیرکاری کە دەکۆڵێتەوە لە قەبارە، شێوە، شوێن، گۆشە، دووری و هەر تایبەتمەندیەکی تری ئەندازیاری شتەکان"
        },
        urlName: "geometry",
        keywords: [
            "geometry"
        ],
        calculatorsUrlName: [
        ]
    },
    {
        en: {
            name: "Unit Conversion",
            description: "Conversion of Units is a multi-step process that converts units of measurement for the same quantity."
        },
        kr: {
            name: "گۆڕانکاری یەکەکان",
            description: "گۆڕانکاری یەکەکان پڕۆسەیەکی چەند هەنگاویە کە یەکەکان ئەگۆڕێت بۆ هەمان بڕ"
        },
        urlName: "unit-conversion",
        keywords: [
            "unit conversion"
        ],
        calculatorsUrlName: [
        ]
    }
];



// getting all collections
function getAllCollections() {
    return [...Collections];
}


export default getAllCollections;