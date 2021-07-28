import React, { useState } from 'react'

import './proportion-ratio.css'
import languageHelper from '../../../partials/languageHelper'



// component content
const componentContent = {
    method: {
        en: 'Method',
        kr: 'ڕێگا'
    },
    select: [
        {
            name: { en: 'Directly Proportion', kr: 'ڕێژەی ڕاستەوخۆیی' },
            value: 'directly'
        },
        {
            name: { en: 'Indirectly Proportion', kr: 'ڕێژەی ناڕاستەوخۆیی' },
            value: 'indirectly'
        }
    ],
    label: {
        en: 'Input the Values',
        kr: 'ژمارەکان بنووسە'
    }
}



/**
 *  @return {Element} : Proportion Ratio element
 */
// *** Proportion Ratio component
export default function ProportionRatio() {

    // storing values
    let [values, setValues] = useState({
        method: 'directly',
        number1: '',
        number2: '',
        number3: '',
        answer: ''
    })


    // calculation function
    function calculate(e) {

        // creating a new variable to store the new updates
        let newValues = {
            ...values,
            [e.target.id]: e.target.value
        }

        // updating the answer
        newValues.answer =
            newValues.method === 'directly' ? (newValues.number3 * newValues.number2) / newValues.number1 : // if the method was directly
                newValues.method === 'indirectly' ? (newValues.number1 * newValues.number2) / newValues.number3 : // if the method was indirectly
                    '' // if the value of method was changed, set empty answer

        setValues(newValues)
    }


    return (
        <>
            {/* Proportion Ratio Calculator */}
            <div className="proportion-ratio">

                {/* controls */}
                <div className="controls">

                    {/* control label */}
                    <label htmlFor="method" className={`label control-label ${languageHelper.getClass()}`}>
                        {componentContent.method[languageHelper.getLanguageSymbol()]}
                    </label>

                    {/* this is to add some space between the label and the dropdown */}
                    <span className="space"></span>

                    {/* method selectior */}
                    <select id="method" name="method" className={`dropdown method-dropdown ${languageHelper.getClass()}`} onChange={calculate}>

                        {/* options */}
                        {componentContent.select.map((option, i) =>
                            <option key={i} value={option.value}>{option.name[languageHelper.getLanguageSymbol()]}</option>
                        )}
                    </select>

                </div>

                {/* calculation area */}
                <div className="calculator">

                    {/* left side */}
                    <div className="left">

                        {/* input 1 */}
                        <div className="input1">
                            <input type="number" id="number1" className="input-field" placeholder="4" autoComplete="off"
                                value={values.number1}
                                onChange={calculate}
                            />
                        </div>

                        {/* input 2 */}
                        <div className="input2">
                            <input type="number" id="number2" className="input-field" placeholder="8" autoComplete="off"
                                value={values.number2}
                                onChange={calculate}
                            />
                        </div>
                    </div>

                    {/* right side */}
                    <div className="right">

                        {/* input 3 */}
                        <div className="input3">
                            <input type="number" id="number3" className="input-field" placeholder="2" autoComplete="off"
                                value={values.number3}
                                onChange={calculate}
                            />
                        </div>

                        {/* answer */}
                        <div className="answer">
                            <input type="number" id="answer" className="input-field answer-field" autoComplete="off"
                                placeholder={values.method === 'directly' ? '4' : values.method === 'indirectly' ? '16' : ''} readOnly
                                value={values.answer}
                                onClick={(e) => { e.target.select() }}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}