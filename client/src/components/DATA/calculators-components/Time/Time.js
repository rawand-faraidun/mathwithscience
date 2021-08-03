import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
import { nerdamerCalculate, makeInitialState } from '../calculators-helpers/unit-conversion'



// component content
// contains all unit details
const componentContent = [
    {
        name: {
            en: 'Second',
            kr: 'چرکە'
        },
        id: 'second',
        unit: 's',
        equation: 's'
    },
    {
        name: {
            en: 'Millisecond',
            kr: 'میلیچرکە'
        },
        id: 'millisecond',
        unit: 'ms',
        equation: 'ms=s*1000'
    },
    {
        name: {
            en: 'Minute',
            kr: 'خولەک'
        },
        id: 'minute',
        unit: 'm',
        equation: 'm=s/60'
    },
    {
        name: {
            en: '‌Hour',
            kr: 'کاتژمێر'
        },
        id: 'hour',
        unit: 'h',
        equation: 'h=s/3600'
    },
    {
        name: {
            en: 'Day',
            kr: 'ڕۆژ'
        },
        id: 'day',
        unit: 'day',
        equation: 'day=s/86400'
    },
    {
        name: {
            en: 'Week',
            kr: 'هەفتە'
        },
        id: 'week',
        unit: 'week',
        equation: 'week=s/604800'
    },
    {
        name: {
            en: 'Month',
            kr: 'مانگ'
        },
        id: 'month',
        unit: 'month',
        equation: 'month=s/2592000'
    },
    {
        name: {
            en: 'Year',
            kr: 'ساڵ'
        },
        id: 'year',
        unit: 'year',
        equation: 'year=s/31536000'
    },
    {
        name: {
            en: 'Decade',
            kr: 'دەیە'
        },
        id: 'decade',
        unit: 'decade',
        equation: 'decade=s/315360000'
    },
    {
        name: {
            en: 'Century',
            kr: 'سەدە'
        },
        id: 'century',
        unit: 'century',
        equation: 'century=s/3153600000'
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