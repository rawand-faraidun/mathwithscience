// importing languageHelper
import languageHelper from '../partials/languageHelper'

// importing cloneDeep from lodash
import cloneDeep from 'lodash/cloneDeep'

// importing Calculators
import Calculators from './Calculators-Data';



// getting calculators
/**
 * @parameters :
 *      @conditions : {Object}, adding conditions to modify returning array
 *          @searchQuery : {String}, the search text that used to search for calculators
 *          @language : {Boolean}, determines if only returning results in one language or all languages
 *          @changeUrl : {String}, determines if adding a text before urlName or not
 * 
 *  @return {Array} : search result grid element, if search was empty it will show calculators
 */
function find(conditions) {

    // cloning the calculators array
    var result = cloneDeep(Calculators());


    // checking for search query
    // it will make result to only return calculators that include searchQuery in one of their properties
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


    // checking for language
    // it will make the result to only return details of one language
    if (conditions?.language) {
        result.forEach(calculator => {
            // removing other language details from the object
            delete calculator[languageHelper.getOtherLanguageSymbol()];
            return calculator
        });
    }


    // checking for changingUrl
    // it will add the choosen text before url of each calculator
    if (conditions?.changeUrl) {
        result.forEach(calculator => {
            // adding the text before the url
            calculator.urlName = `${conditions.changeUrl}/${calculator.urlName}`;
            return calculator
        });
    }


    return result;
}





// exporting module
export { find };