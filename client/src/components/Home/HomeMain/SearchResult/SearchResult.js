import React, { useState, useEffect } from 'react';
import axios from 'axios';

// importing stylings
import './search-result.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';


/**
 * @props :
 *      @searchtext : {String}, the search text the usear searched for
 * 
 *  @return {Element} : search result grid element, if search was empty it will show branches
 */
function SearchResult(props) {

    // stores the search result
    const [searchResult, setSearchResult] = useState([]);

    // getting the results of the search
    useEffect(() => {

        // requesting for results from the server
        axios(
            {
                url: '/api/search',
                method: 'POST',
                data: {
                    searchText: props.searchtext
                }
            }
        ).then((response) => {
            setSearchResult(response.data);
        }).catch(error => {
            console.log(error);
        });

    }, [props.searchtext]);

    console.log(searchResult);


    return (
        <>
            {/* search results grid */}
            <div className="search-result" dir={languageHelper.getDirection()}>

                {/* each result */}
                {searchResult.map((result, i) =>
                    <a href={`/calculators/${result.urlName}`} className="result" key={i}>

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
