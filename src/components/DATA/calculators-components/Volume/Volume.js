import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Meter³',
            kr: 'مەتر³'
        },
        id: 'meter',
        unit: 'm',
        equation: 'm'
    },
    {
        name: {
            en: 'Killometer³',
            kr: 'کیلۆمەتر³'
        },
        id: 'kilometer',
        unit: 'km',
        equation: 'km=m/(1e+9)'
    },
    {
        name: {
            en: 'Liter',
            kr: 'لیتر'
        },
        id: 'liter',
        unit: 'l',
        equation: 'l=m*1000'
    },
    {
        name: {
            en: 'Milliliter',
            kr: 'میلیلیتر'
        },
        id: 'milliliter',
        unit: 'mm',
        equation: 'mm=m*(1e+9)'
    },
    {
        name: {
            en: 'Millimeter³',
            kr: 'میلیمەتر³'
        },
        id: 'millimeter',
        unit: 'mm',
        equation: 'mm=m*(1e+9)'
    },
    {
        name: {
            en: 'Centimeter³',
            kr: 'سەنتیمەتر³'
        },
        id: 'centimeter',
        unit: 'cm',
        equation: 'cm=m*(1e+6)'
    },
    {
        name: {
            en: 'Decimeter³',
            kr: 'دەسیمەتر³'
        },
        id: 'decimeter',
        unit: 'dm',
        equation: 'dm=m*1000'
    },
    {
        name: {
            en: 'Hectometer³',
            kr: 'هێکتۆمەتر³'
        },
        id: 'hectometer',
        unit: 'hm',
        equation: 'hm=m/(1e+6)'
    },
    {
        name: {
            en: 'inch³',
            kr: 'ئینج³'
        },
        id: 'inch',
        unit: 'in',
        equation: 'in=m*61023.7'
    },
    {
        name: {
            en: 'foot³',
            kr: 'پێ³'
        },
        id: 'foot',
        unit: 'ft',
        equation: 'ft=m*35.3147'
    },
    {
        name: {
            en: 'Mile³',
            kr: 'میل³'
        },
        id: 'mile',
        unit: 'mi',
        equation: 'mi=m/(4.168e+5)'
    },
]




/**
 *  @return {Element} : Volume element
 */
export default function Volume() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* volume calculator */}
            <div className="volume component-grid">

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