import React, { useState } from 'react'

import languageHelper from '../../../partials/helpers/Language'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Gram',
            kr: 'گرام'
        },
        id: 'gram',
        unit: 'g',
        equation: 'g'
    },
    {
        name: {
            en: 'Kilogram',
            kr: 'کیلۆگرام'
        },
        id: 'kilogram',
        unit: 'kg',
        equation: 'kg=g/1000'
    },
    {
        name: {
            en: 'Milligram',
            kr: 'میلیگرام'
        },
        id: 'milligram',
        unit: 'mg',
        equation: 'mg=g*1000'
    },
    {
        name: {
            en: 'Nanogram',
            kr: 'نانۆگرام'
        },
        id: 'nanogram',
        unit: 'ng',
        equation: 'ng=g*(1e+9)'
    },
    {
        name: {
            en: 'Microgram',
            kr: 'مایکرۆگرام'
        },
        id: 'microgram',
        unit: 'μg',
        equation: 'μg=g*(1e+6)'
    },
    {
        name: {
            en: 'Centigram',
            kr: 'سەنتیگرام'
        },
        id: 'centigram',
        unit: 'cg',
        equation: 'cg=g*100'
    },
    {
        name: {
            en: 'Decigram',
            kr: 'دەسیگرام'
        },
        id: 'decigram',
        unit: 'dg',
        equation: 'dg=g*10'
    },
    {
        name: {
            en: 'Hectogram',
            kr: 'هێکتۆگرام'
        },
        id: 'hectogram',
        unit: 'hg',
        equation: 'hg=g/10'
    },
    {
        name: {
            en: 'Ton',
            kr: 'تەن'
        },
        id: 'ton',
        unit: 't',
        equation: 't=g/(1e+5)'
    },
    {
        name: {
            en: 'Pound',
            kr: 'پاوەند'
        },
        id: 'pound',
        unit: 'lbs',
        equation: 'lbs=g/454'
    },
    {
        name: {
            en: 'Ounce',
            kr: 'ئۆنج'
        },
        id: 'ounce',
        unit: 'oz',
        equation: 'oz=g/28.35'
    },
]




/**
 *  @return {Element} : Weight element
 */
export default function Weight() {

    // stroring values for all units
    const [values, setValues] = useState(makeInitialState(componentContent))


    // calculation function
    function calculate(e) {
        // setting the new values
        setValues(nerdamerCalculate(e.target, componentContent, values))
    }


    return (
        <>
            {/* weight calculator */}
            <div className="weight component-grid">

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