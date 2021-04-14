// importing languageHelper
import languageHelper from '../partials/languageHelper'

// importing cloneDeep from lodash
import cloneDeep from 'lodash/cloneDeep'

// importing Collections
import Collections from './Collections-Data';





// getting collections
/**
 * @parameters :
 *      @conditions : {Object}, adding conditions to modify returning array
 *          @searchQuery : {String}, the search text that used to search for collections
 *          @language : {Boolean}, determines if only returning results in one language or all languages
 *          @changeUrl : {String}, determines if adding a text before urlName or not
 * 
 *  @return {Array} : search result grid element, if search was empty it will show collections
 */
function find(conditions) {

    // cloning the collections array
    var result = cloneDeep(Collections());


    // checking for search query
    // it will make result to only return collections that include searchQuery in one of their properties
    if (conditions?.searchQuery) {
        result = result.filter(collection => {

            // returning the ones that english or kurdish name or description includes the search text
            return (
                collection.en.name.toLowerCase().includes(conditions.searchQuery.toLowerCase()) ||
                collection.en.description.toLowerCase().includes(conditions.searchQuery.toLowerCase()) ||
                collection.kr.name.toLowerCase().includes(conditions.searchQuery.toLowerCase()) ||
                collection.kr.description.toLowerCase().includes(conditions.searchQuery.toLowerCase())
            )
        });
    }


    // checking for language
    // it will make the result to only return details of one language
    if (conditions?.language) {
        result.forEach(collection => {
            // removing other language details from the object
            delete collection[languageHelper.getOtherLanguageSymbol()];
            return collection
        });
    }


    // checking for changingUrl
    // it will add the choosen text before url of each collection
    if (conditions?.changeUrl) {
        result.forEach(collection => {
            // adding the text before the url
            collection.urlName = `${conditions.changeUrl}/${collection.urlName}`;
            return collection
        });
    }


    return result;
}





// exporting module
export { find };