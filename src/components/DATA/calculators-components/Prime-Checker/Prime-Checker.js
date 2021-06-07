import React, { useState } from 'react';

// importing styling
import './prime-checker.css';

// importing Components
import languageHelper from '../../../partials/languageHelper';



// component content all languages
const componentContent = {
    input: {
        en: 'Number',
        kr: 'ژمارە'
    },
    primeStatus: {
        true: {
            en: 'Is Prime',
            kr: 'ژمارەی خۆبەشە'
        },
        false: {
            en: 'Is Not Prime',
            kr: 'ژمارەی خۆبەش نیە'
        }
    },
    next: {
        en: 'Next Prime',
        kr: 'ژمارەی خۆبەشی دواتر'
    },
    previous: {
        en: 'Previous Prime',
        kr: 'ژمارەی خۆبەشی پێشتر'
    },
}



/**
 *  @return {Element} : Equation Solver
 */
// *** Equation Solver Component
function ProportionRatio() {


    const [values, setValues] = useState({
        value: '',
        primeStatus: '',
        next: '',
        previous: ''
    });


    function calculate(e) {
        setValues({
            value: e.target.value,
            primeStatus: isPrime(e.target.value),
            next: nextPrime(e.target.value),
            previous: previousPrime(e.target.value)
        });
    }

    //check if the number is prime or not
    function isPrime(number) {

        // stop on negative numbers
        if (number < 1) {
            return false;
        }

        // even numbers
        if (number % 2 === 0 && number > 2) {
            return false;
        }

        // store the square to loop faster
        // start from 3, stop at the square
        for (let i = 3, s = Math.sqrt(number); i <= s; i++) {
            if (number % i === 0) {
                return false;
            }
        }

        return true;
    }

    //finding the next prime
    function nextPrime(number) {

        // stop on negative numbers
        if (number < 1) {
            return false;
        }

        // starting from the number, then increasing untill findig the nearest prime one
        for (var i = parseInt(number) + 1; true; i++) {

            // stop on negative numbers
            if (i < 1) {
                return false;
            }

            // checking if the current nunber is prime or not
            if (isPrime(i) === true) {
                return i;
            }
        }
    }

    //finding the previous prime
    function previousPrime(number) {

        // starting from the number, then decreasing untill findig the nearest prime one
        for (var i = parseInt(number) - 1; true; i--) {

            // stop on negative numbers
            if (i < 1) {
                return false;
            }

            // checking if the current nunber is prime or not
            if (isPrime(i) === true) {
                return i;
            }
        }
    }


    return (
        <>
            {/* prime checker calculator */}
            <div className="prime-checker">

                {/* input part */}
                <div className="input-value">

                    {/* input label */}
                    <label htmlFor="value" className={`label value-label ${languageHelper.getClass()}`}>
                        {componentContent.input[languageHelper.getLanguageSymbol()]}
                    </label>

                    {/* input field */}
                    <input type="number" id="value" className="input-field value-input" autoComplete="off"
                        value={values.value}
                        onChange={calculate}
                    />
                </div>

                {/* answers */}
                <div className="answers">

                    {/* prime check status */}
                    <div className="status">
                        <label className={`label status-label ${languageHelper.getClass()} ${values.primeStatus}`}>
                            {typeof values.primeStatus === 'boolean' ?
                                componentContent.primeStatus[String(values.primeStatus)][languageHelper.getLanguageSymbol()] : ''
                            }
                        </label>
                    </div>

                    {/* previous prime part */}
                    <div className="previous-prime">

                        {/* previous prime label */}
                        <label htmlFor="previous-prime" className={`label previous-label ${languageHelper.getClass()}`}>
                            {componentContent.previous[languageHelper.getLanguageSymbol()]}
                        </label>

                        {/* previous prime field */}
                        <input type="number" id="previous-prime" className="input-field answer-field previous-input" autoComplete="off"
                            value={values.previous}
                            readOnly={true}
                            onClick={(e) => { e.target.select() }}
                        />
                    </div>

                    {/* next prime part */}
                    <div className="next-prime">

                        {/* next prime label */}
                        <label htmlFor="next-prime" className={`label next-label ${languageHelper.getClass()}`}>
                            {componentContent.next[languageHelper.getLanguageSymbol()]}
                        </label>

                        {/* next prime field */}
                        <input type="number" id="next-prime" className="input-field answer-field next-input" autoComplete="off"
                            value={values.next}
                            readOnly={true}
                            onClick={(e) => { e.target.select() }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProportionRatio;
