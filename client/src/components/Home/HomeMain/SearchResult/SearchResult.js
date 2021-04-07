import React from 'react';

// importing stylings
import './search-result.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';



// component content all languages
const componentContent = {
    branches: [
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'جەبر', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        },
        {
            urlName: 'algebra',
            en: { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence' },
            kr: { name: 'تێست', description: 'لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور لۆرێم ئیپسوم دۆلۆر سیت ئامێت کۆنسێکتێتور' }
            , visited: 0
        }
    ]
}



/**
 *  @return {Element} : search result grid element, if search was empty it will show branches
 */
function SearchResult(props) {

    // filtering the array by search query
    var filtered = componentContent.branches.filter(result =>
        result['en'].name.toLowerCase().includes(props.searchquery.toLowerCase()) || result['en'].description.toLowerCase().includes(props.searchquery.toLowerCase())
        || result['kr'].name.toLowerCase().includes(props.searchquery.toLowerCase()) || result['kr'].description.toLowerCase().includes(props.searchquery.toLowerCase())
    );


    // sorting the array
    filtered.sort((a, b) => {

        // checking for the ones that have the most visited count
        if (a.visited < b.visited) {
            return 1;
        }
        // if visit count was equal, then sorting it by alphabetic of name
        else if (a.visited === b.visited) {
            if (a.urlName < b.urlName) {
                return -1;
            }
            else {
                return 1;
            }
        }
        // if passed the other 2
        else {
            return -1;
        }
    })


    return (
        <>
            {/* search results grid */}
            <div className="search-result" dir={languageHelper.getDirection()}>

                {/* each result */}
                {filtered.map((result, i) =>
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
