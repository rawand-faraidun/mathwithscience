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
            en: 'Watt',
            kr: 'وات'
        },
        id: 'watt',
        unit: 'W',
        equation: 'g'
    },
    {
        name: {
            en: 'Kilowatt',
            kr: 'کیلۆوات'
        },
        id: 'killowatt',
        unit: 'kW',
        equation: 'kW=W/1000'
    },
    {
        name: {
            en: 'Megawatt',
            kr: 'مێگاوات'
        },
        id: 'megawatt',
        unit: 'MW',
        equation: 'MW=W/(1e+6)'
    },
    {
        name: {
            en: 'Milliwatt',
            kr: 'میلیوات'
        },
        id: 'milliwatt',
        unit: 'mW',
        equation: 'mW=W*1000'
    },
    {
        name: {
            en: 'Horse Power',
            kr: 'وزەی ئەسپ'
        },
        id: 'hoursepower',
        unit: 'hp',
        equation: 'hp=W/746'
    }
]




/**
 *  @return {Element} : Power element
 */
// *** Power element
function Power() {


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
                nerdamer(i.equation, // getting current unit equation
                    { [componentContent[0].unit]: newValues[componentContent[0].id] } // replacing main unit variable with its value
                ).solveFor(i.unit).toString() // solving for current unit
            ).evaluate().text().match(/^0*(\d+(?:\.(?:(?!0+$)\d)+)?)/)[1]; // this will remove trailing zeroes
        }

        setValues(newValues);
    }



    return (
        <>
            {/* power calculator */}
            <div className="power component-grid">

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

export default Power;