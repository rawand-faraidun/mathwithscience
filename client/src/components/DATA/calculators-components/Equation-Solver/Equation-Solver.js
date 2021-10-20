import React, { useState, useEffect } from 'react'
import Desmos from 'desmos'

import './equation-solver.css'
import languageHelper from '../../../partials/helpers/Language'
let nerdamer = require('nerdamer')
require('nerdamer/Algebra.js')
require('nerdamer/Calculus.js')
require('nerdamer/Solve.js')



// component content
const componentContent = {
    equation: {
        en: 'Equation',
        kr: 'هاوکێشە'
    },
    answers: {
        en: 'Answers',
        kr: 'ئەنجامەکان'
    },
    warning: {
        en: 'Sometimes the graph may show less X-Intercepts than the answers, they are called (Complex Answers) and they are important.',
        kr: 'هەنێک جار لەوانەیە لە نەخشەکەدا یەکتربڕینی کەمتر هەیە لە وەڵامەکان، ئەوانە ناونراون بە  (وەڵامە ئاڵۆزەکان) و گرنگن.'
    },
    graph: {
        en: 'Graph',
        kr: 'نەخشە'
    },
}



/**
 *  @return {Element} : Equation Solver element
 */
 export default function ProportionRatio() {

    // storing values
    let [values, setValues] = useState({
        equation: '',
        answers: ['']
    })


    // auto updating graph on state change
    useEffect(() => {
        // generation the graph
        document.getElementById('graph').innerHTML = ''

        // creating desmos element
        var calculator = Desmos.GraphingCalculator(document.getElementById('graph'), {
            expressions: false,
            keypad: false,
            settingsMenu: false
        })

        // setting or updating graph
        calculator.setExpression({ id: 'graph1', latex: `y=${values.equation}` })
    }, [values])


    // calculation function
    function calculate(e) {

        // preventing input of invailed characters
        if (!/^[A-Za-z0-9.^*+/()-]*$/.test(e.target.value)) return

        // answers array
        var sol = []

        // trying to sove them
        try {
            // getting x intercepts
            sol = nerdamer.solveEquations(e.target.value.toLowerCase()).map(solution => parseFloat(nerdamer(solution).evaluate().text()))
        }
        // catching any errors, mostly the errors are saying that the input equation is not valid
        catch {
            sol = ['']
        }

        // saving the values
        setValues({
            equation: e.target.value.toLowerCase(),
            answers: sol
        })

    }


    return (
        <>
            {/* Equation Solver Calculator */}
            <div className="equation-solver">

                {/* equation */}
                <div className="equation">

                    {/* equation label */}
                    <label htmlFor="equation" className={`label equation-label ${languageHelper.getClass()}`}>
                        {componentContent.equation[languageHelper.getLanguageSymbol()]}
                    </label>

                    {/* equation input */}
                    <input type="text" id="equation" className="input-field equation-input" placeholder="ax^3-bx^2-cx-d" autoComplete="off"
                        value={values.equation}
                        onChange={calculate}
                    />



                </div>

                {/* answers */}
                <div className="equation-answers">

                    {/* equation answers */}
                    <div className={`answers ${languageHelper.getDirection()}`}>

                        {/* equation answers label */}
                        <label className={`label ${languageHelper.getClass()}`}>
                            {componentContent.answers[languageHelper.getLanguageSymbol()]}
                        </label>

                        {/* equation answers */}
                        <div className="answers-inputs">

                            {/* each answer */}
                            {values.answers.map((answer, i) => {
                                if (isNaN(answer)) {
                                    return ''
                                }

                                return <input key={i} type="number" id="answer" className="answer input-field answer-field" placeholder="" autoComplete="off"
                                    readOnly
                                    dir="ltr"
                                    value={answer}
                                    onClick={(e) => { e.target.select() }}
                                />
                            })}
                        </div>

                        {/* equation answers label */}
                        <label className={`label answers-warning ${languageHelper.getClass()}`}>
                            {componentContent.warning[languageHelper.getLanguageSymbol()]}
                        </label>
                    </div>

                    {/* equation graph */}
                    <div className={`equation-graph ${languageHelper.getDirection()}`}>

                        {/* equation graph label */}
                        <label className={`label graph-label ${languageHelper.getClass()}`}>
                            {componentContent.graph[languageHelper.getLanguageSymbol()]}
                        </label>

                        {/* equation graph */}
                        <div className="graph" id="graph">
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}