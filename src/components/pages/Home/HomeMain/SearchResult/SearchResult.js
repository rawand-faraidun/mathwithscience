import React, { useMemo } from 'react';

// importing stylings
import './search-result.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';

// importing datas
const Collections = require('../../../DATA/Collections');
const Calculators = require('../../../DATA/Calculators');



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
        return Collections.find({ language: true, changeUrl: 'collections' });
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
        var searchCollectionResult = Collections.find({ searchQuery: props.searchtext, language: true, changeUrl: 'collections' });

        // getting calculators based on search text
        var searchCalculatorsResult = Calculators.find({ searchQuery: props.searchtext, language: true, changeUrl: 'collections' });

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
