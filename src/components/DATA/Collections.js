// importing cloneDeep from lodash
import cloneDeep from 'lodash/cloneDeep'

// importing Collections
import Collections from './Collections-Data';



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

    console.log(Collections());

    return result;
}





// exporting module
export { find };