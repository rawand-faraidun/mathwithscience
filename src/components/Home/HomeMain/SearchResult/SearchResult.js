import React, { useMemo } from 'react';

// importing stylings
import './search-result.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';
const Collections = require('../../../DATA/Collections');
const Calculators = require('../../../DATA/Calculators');


// this is used to change Url of objects
function changeUrl(arrayOfObjects, beforeUrlText) {

    arrayOfObjects.map(object => {
        object.urlName = `${beforeUrlText}/${object.urlName}`;
        return object;
    });

    return arrayOfObjects;
}


/**
 * @props :
 *      @searchtext : {String}, the search text the usear searched for
 * 
 *  @return {Element} : search result grid element, if search was empty it will show collections
 */
function SearchResult(props) {


    // getting all collections, saving it to prevent reruning
    const collections = useMemo(() => {
        // getting all collections
        return changeUrl(Collections.find(), 'collections');
    }, []);

    // search results
    var searchResult = [];

    // if the search result was empty, searchResult will be collections
    if (props.searchtext.length === 0) {
        searchResult = collections;
    }
    // if it was not empty, it will search for collections and calculators based on searchText
    else {
        // getting collections based on search text
        var searchCollectionResult = changeUrl(Collections.find({ searchQuery: props.searchtext }), 'collections');

        // getting calculators based on search text
        var searchCalculatorsResult = changeUrl(Calculators.find({ searchQuery: props.searchtext }), 'collections');

        // setting both results as searchResult
        searchResult = [...searchCollectionResult, ...searchCalculatorsResult];
    }


    return (
        <>
            {/* search results grid */}
            <div className="search-result" dir={languageHelper.getDirection()}>

                {/* each result */}
                {searchResult.map((result, i) =>
                    <a href={`/${result.urlName}`} className="result" key={i}>

                        {/* result title */}
                        <h2 className={`result-name ${languageHelper.getClass()}`}>
                            {result[languageHelper.getLanguageSymbol()].name}
                        </h2>

                        {/* result description */}
                        <p className={`result-description ${languageHelper.getClass()}`}>
                            {`${result[languageHelper.getLanguageSymbol()].description.substring(0, 100)}...`}
                        </p>
                    </a>
                )}
            </div>
        </>
    );
}



export default SearchResult;
