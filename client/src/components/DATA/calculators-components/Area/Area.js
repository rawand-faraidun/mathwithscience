import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
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
 export default function Area() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
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