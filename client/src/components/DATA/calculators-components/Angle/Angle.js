import React, { useState } from 'react'

import languageHelper from '../../../partials/helpers/Language'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Digree',
            kr: 'پلە'
        },
        id: 'digree',
        unit: 'dig',
        equation: 'dig'
    },
    {
        name: {
            en: 'Radiant',
            kr: 'ڕادیەنت'
        },
        id: 'radiant',
        unit: 'rad',
        equation: `rad=dig*(${Math.PI}/180)`
    },
    {
        name: {
            en: 'Turn',
            kr: 'خول'
        },
        id: 'turn',
        unit: 'tr',
        equation: 'tr=dig/360'
    },
    {
        name: {
            en: 'sextant',
            kr: 'شەشبەش'
        },
        id: 'sextant',
        unit: 'sextant',
        equation: 'sextant=dig/60'
    },
    {
        name: {
            en: 'Quadrant',
            kr: 'چواربەش'
        },
        id: 'quadrant',
        unit: 'quadrant',
        equation: 'quadrant=dig/90'
    },
]




/**
 *  @return {Element} : Angle element
 */
export default function Angle() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* angle calculator */}
            <div className="angle component-grid">

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