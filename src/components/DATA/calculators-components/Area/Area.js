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
// THE FIRST UNIT IS ALWAYS THE MAIN UNIT
const componentContent = [
    {
        name: {
            en: 'Meter²',
            kr: 'مەتر²'
        },
        id: 'meter',
        unit: 'm',
        equation: 'm'
    },
    {
        name: {
            en: 'Killometer²',
            kr: 'کیلۆمەتر²'
        },
        id: 'kilometer',
        unit: 'km',
        equation: 'km=m/(1e+6)'
    },
    {
        name: {
            en: 'Millimeter²',
            kr: 'میلیمەتر²'
        },
        id: 'millimeter',
        unit: 'mm',
        equation: 'mm=m*(1e+6)'
    },
    {
        name: {
            en: 'Centimeter²',
            kr: 'سەنتیمەتر²'
        },
        id: 'centimeter',
        unit: 'cm',
        equation: 'cm=m*(1e+5)'
    },
    {
        name: {
            en: 'Decimeter²',
            kr: 'دەسیمەتر²'
        },
        id: 'decimeter',
        unit: 'dm',
        equation: 'dm=m*100'
    },
    {
        name: {
            en: 'Hectare',
            kr: 'هێکتار'
        },
        id: 'hectare',
        unit: 'ha',
        equation: 'ha=m/(1e+4)'
    },
    {
        name: {
            en: 'inch²',
            kr: 'ئینج²'
        },
        id: 'inch',
        unit: 'in',
        equation: 'in=m*1550'
    },
    {
        name: {
            en: 'foot²',
            kr: 'پێ²'
        },
        id: 'foot',
        unit: 'ft',
        equation: 'ft=m*10.7639'
    },
    {
        name: {
            en: 'Mile²',
            kr: 'میل²'
        },
        id: 'mile',
        unit: 'mi',
        equation: 'mi=m/(2.59e+6)'
    },
]




/**
 *  @return {Element} : Area element
 */
// *** Area element
function Area() {


    // this will store the value of all units based on componentContent object
    let units = {};
    // creating a propoerty in units for each unit in componentContent
    for (const i of componentContent) {
        units[i.id] = '';
    }

    // stroring values for all units
    const [values, setValues] = useState(units);


    // calculation function
    function calculate(e) {

        // copping o;d values
        let newValues = { ...values };

        // calculating value for all units
        for (const i of componentContent) {

            // if the current unit was the changed one, parse its value to it's property
            if (i.unit === e.target.getAttribute('unit')) {
                newValues[i.id] = e.target.value
                continue;
            };

            // main unit
            if (i.unit === componentContent[0].unit) {

                // solving main unit value
                newValues[i.id] =
                    nerdamer(
                        nerdamer(e.target.getAttribute('equation'), // getting equation of the changed unit
                            { [e.target.getAttribute('unit')]: e.target.value } // replacing the variable unit with the changed unit value
                        ).solveFor(i.unit).toString() // solving for main unit
                    ).evaluate().text().match(/^0*(\d+(?:\.(?:(?!0+$)\d)+)?)/)[1] // this will remove trailing zeroes

                continue;
            }

            // calculating value for each other unit
            newValues[i.id] = nerdamer(
                nerdamer(i.equation, { [componentContent[0].unit]: newValues[componentContent[0].id] }).solveFor(i.unit).toString()
            ).evaluate().text().match(/^0*(\d+(?:\.(?:(?!0+$)\d)+)?)/)[1];
        }

        setValues(newValues);
    }



    return (
        <>
            {/* area calculator */}
            <div className="area component-grid">

                {/* each unit calculator */}
                {componentContent.map((unit, i) => {
                    return (
                        <div key={i} className="calculator">

                            {/* unit label */}
                            <label htmlFor={unit.id} className={`label ${languageHelper.getClass()}`}>
                                {unit.name[languageHelper.getLanguageSymbol()]}
                            </label>

                            {/* unit input */}
                            <input type="number" id={unit.id} className="input-field input-focus" autoComplete="off"
                                unit={unit.unit}
                                equation={unit.equation}
                                placeholder={unit.unit}
                                value={values[unit.id]}
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

export default Area;