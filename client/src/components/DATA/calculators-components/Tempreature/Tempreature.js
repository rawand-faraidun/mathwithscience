import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Celcius',
            kr: 'سیلیزی'
        },
        id: 'celcuis',
        unit: 'C',
        equation: 'C'
    },
    {
        name: {
            en: 'Fahrenheit',
            kr: 'فەهرەنهایت'
        },
        id: 'fahrenheit',
        unit: 'F',
        equation: `F=(C*9/5)+32`
    },
    {
        name: {
            en: 'Kelvin',
            kr: 'کلڤن'
        },
        id: 'kelvin',
        unit: 'K',
        equation: 'K=C+273.15'
    },
    {
        name: {
            en: 'Rankine',
            kr: 'ڕانکین'
        },
        id: 'rankine',
        unit: 'R',
        equation: 'R=(C+273.15)*9/5'
    },
    {
        name: {
            en: 'Newton',
            kr: 'نیوتن'
        },
        id: 'newton',
        unit: 'N',
        equation: 'N=C*0.33'
    },
]




/**
 *  @return {Element} : Tempreature element
 */
export default function Tempreature() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* tempreature calculator */}
            <div className="tempreature component-grid">

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