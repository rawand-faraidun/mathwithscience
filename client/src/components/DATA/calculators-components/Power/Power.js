import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



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
export default function Power() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
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