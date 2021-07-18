import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Kilometer / Hour',
            kr: 'کیلۆمەتر / کاتژمێر'
        },
        id: 'kilometerhour',
        unit: 'kmph',
        equation: 'kmph'
    },
    {
        name: {
            en: 'Meter / Second',
            kr: 'مەتر / سانیە'
        },
        id: 'metersecond',
        unit: 'mps',
        equation: 'mps=kmph/3.6'
    },
    {
        name: {
            en: 'Mile / Hour',
            kr: 'میل / کاتژمێر'
        },
        id: 'milehour',
        unit: 'miph',
        equation: 'miph=kmph/1.609'
    },
    {
        name: {
            en: 'Foot / Second',
            kr: 'پێ / سانیە'
        },
        id: 'footsecond',
        unit: 'ftps',
        equation: 'ftps=kmph/1.09728'
    },
    {
        name: {
            en: 'Lightspeed',
            kr: 'خێرایی ڕووناکی'
        },
        id: 'lightspeed',
        unit: 'c',
        equation: 'c=kmph/(1.079e+9)'
    },
    {
        name: {
            en: 'Knot',
            kr: 'نۆت'
        },
        id: 'knot',
        unit: 'knot',
        equation: 'knot=kmph*0.53995680345572'
    },
]




/**
 *  @return {Element} : Speed element
 */
export default function Speed() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* speed calculator */}
            <div className="speed component-grid">

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