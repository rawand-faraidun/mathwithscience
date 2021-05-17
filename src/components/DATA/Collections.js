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
 *          @limit : {Number}, determines if setting limit to returning results
 * 
 *  @return {Array} : search result grid element, if search was empty it will show collections
 */
function find(conditions) {

    // cloning the collections array
    var result = cloneDeep(Collections());


    // checking for limit
    // it will limit the results
    if (conditions?.limit) {
        result = result.slice(0, conditions.limit);
    }


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
            collection.urlName = `${conditions.changeUrl}/${collection.urlName}`;
            return collection
        });
    }


    return result;
}



// getting collections
/**
 * @parameters :
 *      @conditions : {Object}, adding conditions to find returning object
 *          @urlName : {String}, searches for the object based on urlName property
 *          @language : {Boolean}, determines if the returning collection to be in one language or all languages
 *          @changeUrl : {String}, determines if adding a text before urlName
 * 
 *  @return {Array} : search result grid element, if search was empty it will show collections
 */
function findOne(conditions) {

    // cloning the collections array
    var list = cloneDeep(Collections());

    // this will store the object that matches the condition
    var foundOne;


    // checking for limit
    // it will limit the results
    if (conditions?.urlName) {
        foundOne = list.find(collection => collection.urlName === conditions.urlName)
    }


    // checking if there is a found one
    // it will return undefined if there is no object found
    if (!foundOne) {
        return undefined;
    }


    // checking for language
    // it will make the found one to only return details of one language
    if (conditions?.language) {

        // removing other language details from the object
        delete foundOne[languageHelper.getOtherLanguageSymbol()];
    }


    // checking for changingUrl
    // it will add the choosen text before url of the object
    if (conditions?.changeUrl) {
        foundOne.urlName = `${conditions.changeUrl}/${foundOne.urlName}`;
    }


    return foundOne;
}





// exporting module
export { find, findOne };