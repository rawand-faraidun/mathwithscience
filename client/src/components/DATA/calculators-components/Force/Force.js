import React, { useState } from 'react'

import languageHelper from '../../../partials/helpers/Language'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Newton',
            kr: 'نیوتن'
        },
        id: 'newton',
        unit: 'N',
        equation: 'N'
    },
    {
        name: {
            en: 'Kilogram - Force',
            kr: 'کیلۆگرام - هێز'
        },
        id: 'kilogramforce',
        unit: 'Kgf',
        equation: 'Kgf=N/9.807'
    },
    {
        name: {
            en: 'Gram - Force',
            kr: 'گرام - هێز'
        },
        id: 'gramforce',
        unit: 'gf',
        equation: 'gf=N*101.9716213'
    },
    {
        name: {
            en: 'Dyne',
            kr: 'داین'
        },
        id: 'dyne',
        unit: 'dyn',
        equation: 'dyn=N*(1e+5)'
    },
    {
        name: {
            en: 'Pound - Force',
            kr: 'پاوەند - هێز'
        },
        id: 'poundforce',
        unit: 'lbsf',
        equation: 'lbsf=N/4.448'
    }
]




/**
 *  @return {Element} : Force element
 */
export default function Force() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* force calculator */}
            <div className="force component-grid">

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