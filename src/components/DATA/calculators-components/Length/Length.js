import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
// THE FIRST UNIT IS ALWAYS THE MAIN UNIT
const componentContent = [
    {
        name: {
            en: 'Meter',
            kr: 'مەتر'
        },
        id: 'meter',
        unit: 'm',
        equation: 'm'
    },
    {
        name: {
            en: 'Killometer',
            kr: 'کیلۆمەتر'
        },
        id: 'kilometer',
        unit: 'km',
        equation: 'km=m/1000'
    },
    {
        name: {
            en: 'Millimeter',
            kr: 'میلیمەتر'
        },
        id: 'millimeter',
        unit: 'mm',
        equation: 'mm=m*1000'
    },
    {
        name: {
            en: 'Nanometer',
            kr: 'نانۆمەتر'
        },
        id: 'nanometer',
        unit: 'nm',
        equation: 'nm=m*(1e+9)'
    },
    {
        name: {
            en: 'Micrometer',
            kr: 'مایکرۆمەتر'
        },
        id: 'micrometer',
        unit: 'µm',
        equation: 'µm=m*(1e+6)'
    },
    {
        name: {
            en: 'Centimeter',
            kr: 'سەنتیمەتر'
        },
        id: 'centimeter',
        unit: 'cm',
        equation: 'cm=m*100'
    },
    {
        name: {
            en: 'Decimeter',
            kr: 'دەسیمەتر'
        },
        id: 'decimeter',
        unit: 'dm',
        equation: 'dm=m*10'
    },
    {
        name: {
            en: 'Decameter',
            kr: 'دێکامەتر'
        },
        id: 'decameter',
        unit: 'dem',
        equation: 'dem=m/10'
    },
    {
        name: {
            en: 'Hectometer',
            kr: 'هێکتۆمەتر'
        },
        id: 'hectometer',
        unit: 'hm',
        equation: 'hm=m/100'
    },
    {
        name: {
            en: 'inch',
            kr: 'ئینج'
        },
        id: 'inch',
        unit: 'in',
        equation: 'in=m*39.3701'
    },
    {
        name: {
            en: 'foot',
            kr: 'پێ'
        },
        id: 'foot',
        unit: 'ft',
        equation: 'ft=m*3.28084'
    },
    {
        name: {
            en: 'yard',
            kr: 'یارد'
        },
        id: 'yard',
        unit: 'yd',
        equation: 'yd=m*1.09361'
    },
    {
        name: {
            en: 'Mile',
            kr: 'میل'
        },
        id: 'mile',
        unit: 'mi',
        equation: 'mi=m/1609'
    },
]




/**
 *  @return {Element} : Length element
 */
export default function Length() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* length calculator */}
            <div className="length component-grid">

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