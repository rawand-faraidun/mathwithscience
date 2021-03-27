import React from 'react';

// importing stylings
import './popular-calculators.css';


/**
 *  @return : Element, returns popular calculators grid
 *  @includes : Homepage most popular calculators
 */
function PopularCalculators() {

    var calculators = [
        { name: 'Proportion Ratio', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Equation Solver', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Decimal Fraction', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Prime Checker', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Volume', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Date', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Time', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Lenght', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Angle', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Digital Storage', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Wight', description: 'lorem ipsum dolor sit amet consectetur adip game occurence lorem ipsum dolor sit amet consectetur adip game occurence', visited: 0 },
        { name: 'Time', description: 'lorem ipsum dolor sit amet consectetur adi occurence lorem ipsum dolor sit amet consectetur adip occurence', visited: 0 }
    ]

    return (

        <div className="popular-calculators">

            <h2 className="popular-calculators-title">Most Popular Calculators</h2>

            {/* includes homepage animation background, searchbar and branches */}
            <div className="popular-calculators-grid">

                {calculators.map((calculator, i) => {
                    return (
                        <a href="/" className="calculator">
                            <h2 className="calculator-name">{calculator.name}</h2>
                            <p className="calculator-description">{`${calculator.description.substring(0, 100)}...`}</p>
                        </a>
                    );
                })}
            </div>

        </div>
    );

}

export default PopularCalculators;
