import React, { useState } from 'react';

// importing Components
import languageHelper from '../../../partials/languageHelper';

// requiring nerdamer
let nerdamer = require('nerdamer');
require('nerdamer/Algebra.js');
require('nerdamer/Calculus.js');
require('nerdamer/Solve.js');



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Gram',
            kr: 'گرام'
        },
        unit: 'g',
        equation: 'g'
    },
    {
        name: {
            en: 'Killogram',
            kr: 'کیلۆگرام'
        },
        unit: 'kg',
        equation: 'kg=g/1000'
    },
    {
        name: {
            en: 'Milligram',
            kr: 'میلیگرام'
        },
        unit: 'mg',
        equation: 'mg=g*1000'
    },
    {
        name: {
            en: 'Nanogram',
            kr: 'نانۆگرام'
        },
        unit: 'ng',
        equation: 'ng=g*1000000000'
    },
    {
        name: {
            en: 'Microgram',
            kr: 'مایکرۆگرام'
        },
        unit: 'μg',
        equation: 'μg=g*1000000'
    },
    {
        name: {
            en: 'Centigram',
            kr: 'سەنتیگرام'
        },
        unit: 'cg',
        equation: 'cg=g*100'
    },
    {
        name: {
            en: 'Decigram',
            kr: 'دەسیگرام'
        },
        unit: 'dg',
        equation: 'dg=g*10'
    },
    {
        name: {
            en: 'Hectogram',
            kr: 'هێکتۆگرام'
        },
        unit: 'hg',
        equation: 'hg=g/10'
    },
    {
        name: {
            en: 'Ton',
            kr: 'تەن'
        },
        unit: 't',
        equation: 't=g/100000'
    },
    {
        name: {
            en: 'Pound',
            kr: 'پاوەند'
        },
        unit: 'lbs',
        equation: 'lbs=g/454'
    },
    {
        name: {
            en: 'Ounce',
            kr: 'ئۆنج'
        },
        unit: 'oz',
        equation: 'oz=g/28.35'
    },
]




/**
 *  @return {Element} : Weight element
 */
// *** Weight element
function Weight() {


    // this will store the value of all units based on componentContent object
    let units = {};
    // creating a propoerty in units for each unit in componentContent
    for (const i of componentContent) {
        units[i.name.en.toLowerCase()] = '';
    }

    // stroring values for all units
    const [values, setValues] = useState(units);


    // calculation function
    function calculate(e) {

        // creating values object
        let newValues = {
            ...values, // coping the old values
            [e.target.id]: e.target.value, // changing user input unit value

            gram: e.target.id === 'gram' ?
                e.target.value : // if the user input gram value, new values gram property will be the user input
                // if it was another unit, calculating value of gram based on this unit
                nerdamer(
                    nerdamer(e.target.getAttribute('equation'),
                        { [e.target.getAttribute('unit')]: e.target.value }
                    ).solveFor('g').toString()
                ).evaluate().text()
            // example of the object
            /* 
            nerdamer(
                'mg=g*1000',
                    { mg: e.target.value }
                ).solveFor('g').toString()
            ).evaluate().text()
            */
        };

        // calculating value for all units
        for (const i of componentContent) {
            if (i.name.en.toLowerCase() === 'gram') continue; // skiping gram
            if (i.unit === e.target.id) continue; // skiping changed unit, because it equals to the user input

            // calculating value for each unit
            newValues[i.name.en.toLowerCase()] = nerdamer(
                nerdamer(i.equation, { g: newValues.gram }).solveFor(i.unit).toString()
            ).evaluate().text();
        }

        setValues(newValues);
    }



    return (
        <>
            {/* weight calculator */}
            <div className="weight component-grid">

                {/* each unit calculator */}
                {componentContent.map((unit, i) => {
                    return (
                        <div key={i} className="calculator">

                            {/* unit label */}
                            <label htmlFor={unit.name.en.toLowerCase()} className={`label ${languageHelper.getClass()}`}>
                                {unit.name[languageHelper.getLanguageSymbol()]}
                            </label>

                            {/* unit input */}
                            <input type="number" id={unit.name.en.toLowerCase()} className="input-field input-focus" autoComplete="off"
                                unit={unit.unit}
                                equation={unit.equation}
                                placeholder={unit.unit}
                                value={values[unit.name.en.toLowerCase()]}
                                onChange={calculate}
                                onClick={(e) => { e.target.select() }}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Weight;