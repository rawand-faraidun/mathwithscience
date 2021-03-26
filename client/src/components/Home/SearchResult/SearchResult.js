import React from 'react';

// importing stylings
import './search-result.css';


/**
 *  @return : Element, returns search result grid element, if search query was empty it will show branches
 */
function SearchResult(props) {

    // list of test branches
    var branches = [
        { name: 'Algebra', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'geometry', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Unit Conversion', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Health', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Miscellaneous', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Matrices', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Finance', description: 'lorem ipsum dolor sit amet consectetur adi occurence lorem ipsum dolor sit amet consectetur adip occurence', visited: 0 }
    ]

    // filtering the array by search query
    var filtered = branches.filter(result =>
        result.name.toLowerCase().includes(props.searchquery.toLowerCase()) || result.description.toLowerCase().includes(props.searchquery.toLowerCase())
    );


    // sorting the array
    filtered.sort((a, b) => {

        // checking for the ones that have the most visited count
        if (a.visited < b.visited) {
            return 1;
        }
        // if visit count was equal, then sorting it by alphabetic of name
        else if (a.visited === b.visited) {
            if (a.name < b.name) {
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
        <div className="search-result">
            {
                filtered.map((branch, i) => {
                    return (
                        <a href={branch.name} className="result" key={i}>
                            <h2 className="result-name">{branch.name}</h2>
                            <p className="result-description">{`${branch.description.substring(0, 100)}...`}</p>
                        </a>
                    )
                })
            }
        </div>
    );

}

export default SearchResult;
