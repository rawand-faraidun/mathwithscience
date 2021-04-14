// importing cloneDeep from lodash
import cloneDeep from 'lodash/cloneDeep'

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
        branchUrl: "algebra",
        urlName: "proportion-ratio",
        keywords: [
            "proportion ratio"
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