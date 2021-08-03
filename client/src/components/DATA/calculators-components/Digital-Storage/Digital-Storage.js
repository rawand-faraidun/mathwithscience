import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Bit',
            kr: 'بیت'
        },
        id: 'bit',
        unit: 'b',
        equation: 'b'
    },
    {
        name: {
            en: 'Kilobit',
            kr: 'کیلۆبیت'
        },
        id: 'kilobit',
        unit: 'Kb',
        equation: 'Kb=b/1000'
    },
    {
        name: {
            en: 'Megabit',
            kr: 'مێگابیت'
        },
        id: 'megabit',
        unit: 'Mb',
        equation: 'Mb=b/(1e+6)'
    },
    {
        name: {
            en: 'Gigabit',
            kr: 'گێگابیت'
        },
        id: 'gigabit',
        unit: 'Gb',
        equation: 'Gb=b/(1e+9)'
    },
    {
        name: {
            en: 'Terabit',
            kr: 'تێرابیت'
        },
        id: 'terabit',
        unit: 'Tb',
        equation: 'Tb=b/(1e+12)'
    },
    {
        name: {
            en: 'Petabit',
            kr: 'پێتابیت'
        },
        id: 'petabit',
        unit: 'Pb',
        equation: 'Pb=b/(1e+15)'
    },
    {
        name: {
            en: 'Byte',
            kr: 'بایت'
        },
        id: 'byte',
        unit: 'B',
        equation: 'B=b/8'
    },
    {
        name: {
            en: 'Kilobyte',
            kr: 'کیلۆبایت'
        },
        id: 'kilobyte',
        unit: 'KB',
        equation: 'KB=b/8/1000'
    },
    {
        name: {
            en: 'Megabyte',
            kr: 'مێگابایت'
        },
        id: 'megabyte',
        unit: 'MB',
        equation: 'MB=b/8/(1e+6)'
    },
    {
        name: {
            en: 'Gigabyte',
            kr: 'گێگابایت'
        },
        id: 'gigabyte',
        unit: 'GB',
        equation: 'GB=b/8/(1e+9)'
    },
    {
        name: {
            en: 'Terabyte',
            kr: 'تێرابایت'
        },
        id: 'terabyte',
        unit: 'TB',
        equation: 'TB=b/8/(1e+12)'
    },
    {
        name: {
            en: 'Petabyte',
            kr: 'پێتابایت'
        },
        id: 'petabyte',
        unit: 'PB',
        equation: 'PB=b/8/(1e+15)'
    },
]




/**
 *  @return {Element} : Time element
 */
export default function Time() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* time calculator */}
            <div className="time component-grid">

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