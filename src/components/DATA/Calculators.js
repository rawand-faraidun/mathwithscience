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
 *          @Sort : {Object} : 
 *              @sortingLanguage : {String}, determines if the sorting be based on language, if not use english
 *              @sortingType : {Number: 1 || -1}, determines the sorting way, 1 for ASC and -1 for DESC, if not specified use ASC
 *          @language : {Boolean}, determines if only returning results in one language or all languages
 *          @removeComponent : {Boolean}, determines if removing component function or not
 *          @changeUrl : {String}, determines if adding a text before urlName or not
 *          @limit : {Number}, determines if setting limit to returning results
 * 
 *  @return {Array} : an array of Calculators that meets the conditions
 */
function find(conditions) {

    // cloning the calculators array
    let result = cloneDeep(Calculators());


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
 

    // sorting the array by name
    // it will sort the array based on their name
    if (conditions?.sort) {
        result.sort((a, b) => (
            a[conditions.sort.sortingLanguage ? conditions.sort.sortingLanguage : 'en'].name > // checking if sorting language is defined, if not use english
            b[conditions.sort.sortingLanguage ? conditions.sort.sortingLanguage : 'en'].name) ?
            (conditions.sort.sortingType ? conditions.sort.sortingType : 1) : // checking if the sorting tyoe is defined, if not using ASC
            (conditions.sort.sortingType ? -conditions.sort.sortingType : -1)
        );
    }


    // checking for limit
    // it will limit the results
    if (conditions?.limit) {
        result = result.slice(0, conditions.limit);
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


    // checking for removeComponent
    // it will make remove component fuction property
    if (conditions?.removeComponent) {
        result.forEach(calculator => {
            // removing component fuction from the object
            delete calculator.component;
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










// getting one calculator
/**
 * @parameters :
 *      @conditions : {Object}, adding conditions to find returning object
 *          @urlName : {String}, searches for the object based on urlName property
 *          @language : {Boolean}, determines if the returning calculator to be in one language or all languages
 *          @removeComponent : {Boolean}, determines if removing component function or not
 *          @changeUrl : {String}, determines if adding a text before urlName or not
 * 
 *  @return {Object} : an object of the Calculator that meets the conditions
 */
function findOne(conditions) {

    // cloning the calculators array
    let list = cloneDeep(Calculators());

    // this will store the object that matches the condition
    let foundOne;


    // checking for limit
    // it will limit the results
    if (conditions?.urlName) {
        foundOne = list.find(calculator => calculator.urlName === conditions.urlName)
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


    // checking for removeComponent
    // it will make remove component fuction property
    if (conditions?.removeComponent) {

        // removing component fuction from the object
        delete foundOne.component;
    }


    // checking for changingUrl
    // it will add the choosen text before url of the object
    if (conditions?.changeUrl) {
        foundOne.urlName = `${conditions.changeUrl}/${foundOne.urlName}`;
    }


    return foundOne;
}










// getting calculators
/**
 * @parameters :
 *      @conditions : {Object}, adding conditions to find returning object
 *          @list : {Array}, Array of urlNames to search in for calculators
 *          @language : {Boolean}, determines if only returning results in one language or all languages
 *          @removeComponent : {Boolean}, determines if removing component function or not
 *          @changeUrl : {String}, determines if adding a text before urlName or not
 * 
 *  @return {Array} : an array of the Calculator that are in conditions list
 */
function findIn(conditions) {

    // cloning the calculators array
    let result = cloneDeep(Calculators());


    // checking for limit
    // it will limit the results
    if (conditions?.list) {
        result = result.filter(calculator => conditions.list.includes(calculator.urlName))
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


    // checking for removeComponent
    // it will make remove component fuction property
    if (conditions?.removeComponent) {
        result.forEach(calculator => {
            // removing component fuction from the object
            delete calculator.component;
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
export { find, findOne, findIn };