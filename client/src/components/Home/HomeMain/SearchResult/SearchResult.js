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
 *  @return : Element, returns search result grid element, if search query was empty it will show branches
 *  @includes : homepage search reslt
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
        <div className="search-result" dir={languageHelper.getDirection()}>
            {
                filtered.map((branch, i) => {
                    return (
                        <a href={`/calculators/${branch.urlName}`} className="result" key={i}>
                            <h2 className={`result-name ${languageHelper.getClass()}`}>
                                {branch[languageHelper.getLanguageSymbol()].name}
                            </h2>
                            <p className={`result-description ${languageHelper.getClass()}`}>
                                {`${branch[languageHelper.getLanguageSymbol()].description.substring(0, 100)}...`}
                            </p>
                        </a>
                    )
                })
            }
        </div>
    );

}

export default SearchResult;
