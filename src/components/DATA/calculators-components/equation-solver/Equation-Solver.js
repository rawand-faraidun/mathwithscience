import React, { useState, useEffect } from 'react';

// importing styling
import './equation-solver.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';
import Desmos from 'desmos';

// requiring mathjax

// requiring nerdamer
let nerdamer = require('nerdamer');
require('nerdamer/Algebra.js');
require('nerdamer/Calculus.js');
require('nerdamer/Solve.js');



// component content all languages
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
 *  @return {Element} : Equation Solver
 */
// *** Equation Solver Component
function ProportionRatio() {

    // storing values
    let [values, setValues] = useState({
        equation: '',
        answers: ['']
    });



    // shwoing an empty graph on start
    useEffect(() => {
        document.getElementById('graph').innerHTML = '';
        var calculator = Desmos.GraphingCalculator(document.getElementById('graph'), {
            expressions: false,
            keypad: false,
            settingsMenu: false
        });
        calculator.setExpression({ id: 'graph1', latex: `y` });
    }, []);


    // calculation function
    function calculate(e) {

        // getting the answers
        var sol = [];

        // trying to sove them
        try {
            // generation the graph
            document.getElementById('graph').innerHTML = '';
            var calculator = Desmos.GraphingCalculator(document.getElementById('graph'), {
                expressions: false,
                keypad: false,
                settingsMenu: false
            });
            calculator.setExpression({ id: 'graph1', latex: `y=${e.target.value.toLowerCase()}` });

            // getting x intercepts
            sol = nerdamer.solveEquations(e.target.value.toLowerCase()).map(solution => parseFloat(nerdamer(solution).evaluate().text()));
        }
        // catching any errors, mostly the errors are saying that the input equation is not valid
        catch {
            sol = ['']
        }

        // saving the values
        setValues({
            equation: e.target.value.toLowerCase(),
            answers: sol
        });

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
                        value={values.number1}
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
                                    return '';
                                }

                                return <input key={i} type="number" id="answer" className="answer input-field answer-field" placeholder="" autoComplete="off"
                                    readOnly={true}
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
    );
}

export default ProportionRatio;
