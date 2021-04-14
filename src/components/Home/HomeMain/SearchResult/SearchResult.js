import React, { useMemo } from 'react';

// importing stylings
import './search-result.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';
const Collections = require('../../../DATA/Collections');


/**
 * @props :
 *      @searchtext : {String}, the search text the usear searched for
 * 
 *  @return {Element} : search result grid element, if search was empty it will show collections
 */
function SearchResult(props) {


    // getting all collections, saving it to prevent reruning
    const collections = useMemo(() => Collections.find({ language: true }), []);

    // search results
    var searchResult = [];

    // if the search result was empty, searchResult will be collections
    if (props.searchtext.length === 0) {
        searchResult = collections;
    }
    // if it was not empty, it will search for collections and calculators based on searchText
    else {
        var searchCollectionResult = Collections.find({ searchQuery: props.searchtext });
        searchResult = searchCollectionResult;
    }


    return (
        <>
            {/* search results grid */}
            <div className="search-result" dir={languageHelper.getDirection()}>

                {/* each result */}
                {searchResult.map((result, i) =>
                    <a href={`/collections/${result.urlName}`} className="result" key={i}>

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
