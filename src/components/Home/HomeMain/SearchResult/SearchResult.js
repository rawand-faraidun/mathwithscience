import React, { useState, useEffect, useMemo } from 'react';
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


    // saving the branches and not letting it rerun
    // if the search was empty it shows this
    const [branches, setBranches] = useState([]);
    useMemo(async () => {
        // only getting needed language details back from branches
        var datas = await axios.get(`/api/branches/all/${languageHelper.getLanguageSymbol()}`);
        setBranches(datas.data);
    }, []);



    // stores the search result
    const [searchResult, setSearchResult] = useState([]);

    // getting the results of the search
    useEffect(() => {
        if (props.searchtext === '') {
            setSearchResult(branches);
        }
        else {
            // requesting results from the server
            axios(
                {
                    url: '/api/search/',
                    method: 'POST',
                    data: {
                        searchText: props.searchtext,
                        language: languageHelper.getLanguageSymbol() // this sends symbol of the language to only get this language details back
                    }
                }
            ).then((results) => {
                setSearchResult(results.data);
            }).catch(err => {
                console.log(err);
            });
        }

    }, [props.searchtext, branches]);

    // this is to pass the time to the server responding to search and the search is empty, if that happened showing branches again
    setTimeout(() => {
        if (props.searchtext === '') {
            setSearchResult(branches);
        }
    }, 0);



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
