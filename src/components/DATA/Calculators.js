// importing cloneDeep from lodash
import cloneDeep from 'lodash/cloneDeep'

/**
 *  @Calculators : array of calculators
 */
const Calculators = [
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
        ]
    }
];





// getting collections
/**
 * @parameters :
 *      @conditions : {Object}, adding conditions to modify returning array
 *          @searchQuery : {String}, the search text that used to search for collections
 * 
 *  @return {Array} : search result grid element, if search was empty it will show collections
 */
function find(conditions) {

    // cloning the collections array
    var result = cloneDeep(Calculators);

    // checking for search query
    // it will make result to only return collections that include searchQuery in one of their properties
    if (conditions?.searchQuery) {
        result = result.filter(calculator => {

            // returning the ones that english or kurdish name or description includes the search text
            return (
                calculator.en.name.toLowerCase().includes(conditions.searchQuery.toLowerCase()) ||
                calculator.en.description.toLowerCase().includes(conditions.searchQuery.toLowerCase()) ||
                calculator.kr.name.toLowerCase().includes(conditions.searchQuery.toLowerCase()) ||
                calculator.kr.description.toLowerCase().includes(conditions.searchQuery.toLowerCase())
            )
        });
    }

    return result;
}





// exporting module
export { find };