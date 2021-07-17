import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'


import './search-result.css'
import languageHelper from '../../../../partials/languageHelper'
const Collections = require('../../../../DATA/Collections')
const Calculators = require('../../../../DATA/Calculators')



/**
 * @param {Object} props :
 *      @searchtext {String} : the search text the usear searched for
 * 
 *  @return {Element} : homepage search result element, if search was empty it will show collections
 */
function SearchResult(props) {

    // getting all collections, preventing it from reruning
    const collections = useMemo(() => {
        // getting all collections
        return Collections.find({ language: true, changeUrl: 'collections' })
    }, [])


    // search results
    let searchResult = []

    // if the search result was empty, searchResult will be collections
    if (props.searchtext.length === 0) {
        searchResult = collections
    }
    // otherwise, it will be result of search in collections and calculators based on search text
    else {
        // getting collections based on search text
        const searchCollectionsResult = Collections.find({ searchQuery: props.searchtext, language: true, changeUrl: 'collections' })

        // getting calculators based on search text
        const searchCalculatorsResult = Calculators.find({ searchQuery: props.searchtext, removeComponent: true, language: true, changeUrl: 'calculators' })

        // setting both results as searchResult
        searchResult = [...searchCollectionsResult, ...searchCalculatorsResult].slice(0, 12)
    }


    return (
        <>
            {/* search results */}
            <div className="search-result" dir={languageHelper.getDirection()}>

                {/* each result */}
                {searchResult.map((result, i) =>
                    <Link to={`/${result.urlName}`} className="result" key={i}>

                        {/* result title */}
                        <h2 className={`result-name ${languageHelper.getClass()}`}>
                            {result[languageHelper.getLanguageSymbol()].name}
                        </h2>

                        {/* result description */}
                        <p className={`result-description ${languageHelper.getClass()}`}>
                            {`${result[languageHelper.getLanguageSymbol()].description.substring(0, 100)}...`}
                        </p>
                    </Link>
                )}
            </div>
        </>
    )
}



export default SearchResult
