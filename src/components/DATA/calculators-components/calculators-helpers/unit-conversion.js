// this file contains founctions ot help calculation of unit conversions

let nerdamer = require('nerdamer');
require('nerdamer/Algebra.js');
require('nerdamer/Calculus.js');
require('nerdamer/Solve.js');





/**
 * 
 * @param {Array} components : calculator components 
 * @returns {Object} an object with each component id as key with empty value
 */
function makeInitialState(components) {

    // this will store the value of all units based on componentContent object
    let units = {};

    // creating a propoerty in units for each unit in componentContent
    for (const i of components) {
        units[i.id] = '';
    }

    // reurning the units state
    return units
}





/**
 * Calculates the values of unit convertions
 * 
 * @param {Element} element : the element with changed value
 * @param {Array} components : calculator components 
 * @param {Object} values : state of the calculator values
 * 
 * @return {Object} newValues
 */
function nerdamerCalculate(element, components, values) {

    // copping old values
    let newValues = { ...values };

    // calculating value for all units
    for (const i of components) {

        // if the current unit was the changed one, parse its value to it's property
        if (i.unit === element.getAttribute('unit')) {
            newValues[i.id] = element.value
            continue;
        };

        // main unit
        if (i.unit === components[0].unit) {

            // solving main unit value
            newValues[i.id] =
                nerdamer(
                    nerdamer(element.getAttribute('equation'), // getting equation of the changed unit
                        { [element.getAttribute('unit')]: element.value } // replacing the variable unit with the changed unit value
                    ).solveFor(i.unit).toString() // solving for main unit
                ).evaluate().text().match(/^0*(\d+(?:\.(?:(?!0+$)\d)+)?)/)[1] // this will remove trailing zeroes

            continue;
        }

        // calculating value for each other unit
        newValues[i.id] = nerdamer(
            nerdamer(i.equation, // getting current unit equation
                { [components[0].unit]: newValues[components[0].id] } // replacing main unit variable with its value
            ).solveFor(i.unit).toString() // solving for current unit
        ).evaluate().text().match(/^0*(\d+(?:\.(?:(?!0+$)\d)+)?)/)[1]; // this will remove trailing zeroes
    }

    // returning the calculated values
    return newValues;
}





export default nerdamerCalculate
export { makeInitialState, nerdamerCalculate }