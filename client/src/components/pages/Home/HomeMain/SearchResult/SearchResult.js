import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'


import './search-result.css'
import languageHelper from '../../../../partials/languageHelper'
const Collections = require('../../../../DATA/Collections')
const Calculators = require('../../../../DATA/Calculators')



// component content
const componentContent = {
    goToSearchRoute: {
        en: 'go to search page for more results ->',
        kr: '<- بڕۆ بۆ پەڕەی گەڕان بۆ ئەنجامی زیاتر',
    }
}



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
        return Collections.find({ language: true, changeUrl: 'collections', sort: { sortingLanguage: languageHelper.getLanguageSymbol() }, briefDescription: 100 })
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
        const searchCollectionsResult = Collections.find({
            searchQuery: props.searchtext,
            language: true,
            changeUrl: 'collections',
            sort: { sortingLanguage: languageHelper.getLanguageSymbol() },
            briefDescription: 100
        })

        // getting calculators based on search text
        const searchCalculatorsResult = Calculators.find({
            searchQuery: props.searchtext,
            removeComponent: true,
            language: true,
            changeUrl: 'calculators',
            sort: { sortingLanguage: languageHelper.getLanguageSymbol() },
            briefDescription: 100
        })

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
                            {result[languageHelper.getLanguageSymbol()].description}
                        </p>
                    </Link>
                )}
            </div>

            {/* adding a link to search route if search result was more than 12 */}
            {searchResult.length === 12 ?
                <div className="link-to-search-route" >
                    <Link to={`/search/${props.searchtext}`} className={`${languageHelper.getClass()}`}>
                        {componentContent.goToSearchRoute[languageHelper.getLanguageSymbol()]}
                    </Link>
                </div>
                : ''
            }
        </>
    )
}



export default SearchResult
