// this file contains founctions ot help calculation of unit conversions

import React, { useState } from 'react'

import languageHelper from '../../../partials/languageHelper'
let nerdamer = require('nerdamer')
require('nerdamer/Algebra.js')
require('nerdamer/Calculus.js')
require('nerdamer/Solve.js')




// colors for shapes
const colors = ['var(--main-blue-color)', 'var(--main-green-color)', '#eb03fc', '#fc9003']





/**
 * @param {Array} properties : calculators properties
 * 
 * @returns {Array} : main properties array
 */
function getMainProperties(properties) {

    return properties.filter(property => property.main)
}





/**
 * @param {Array} properties : calculators properties
 * @param {Element} element : the control element, if it was used it will determine input properties & shape colored parts
 * 
 * @returns {Object} : initial state object
 */
function makeInitialState(properties, element) {

    // this will store the value of all properties
    let initialState = {
        inputProperties: element === undefined ? getMainProperties(properties).map(property => `${property.id},`).toString() : element.value,
    }

    // setting shape colored parts
    initialState.shapeColoredParts = {}
    element === undefined ?
        initialState.shapeColoredParts = Object.fromEntries(getMainProperties(properties).map((property, i) => [property.id, colors[i]])) :
        element.value.split(',').forEach((part, i) => { initialState.shapeColoredParts = { ...initialState.shapeColoredParts, [part]: colors[i] } })

    // creating a propoerty in initialState for each unit in componentContent
    for (const i of properties) {
        initialState[i.id] = ''
    }

    // reurning the initial state state
    return initialState
}





/**
 * @param {Object} props :
 *      @param {Array} componentContent : calculator components
 *      @param {Element} ShapeSvgElement : the shape element
 * 
 * @returns {Element} an element for geometry calculation
 */
export default function MakeGeometryElement(props) {

    // props destructuring
    var { componentContent, ShapeSvgElement } = props
    var { properties, inputPropertyControlLabel, answersLabel } = componentContent


    // stroring values for all properties
    const [values, setValues] = useState(makeInitialState(properties))


    // changing input property handler
    function changeInputProperty(e) {
        setValues(makeInitialState(properties, e.target))
    }


    // calculation function
    function calculate(e) {

        // copping old values
        let newValues = { ...values }

        // parsing the changed peoperty value
        newValues[e.target.id] = e.target.value

        // getting main properties
        let mainProperties = getMainProperties(properties)


        // calculating single main property
        if (mainProperties.length === 1) {

            // getting main property
            let mainProperty = mainProperties[0]

            // calculating main property if it was not the typed one
            // main property has to be calculated first because it is used to calculate others
            if (mainProperty.id !== e.target.id) {
                newValues[mainProperty.id] =
                    nerdamer(
                        nerdamer(properties.find(property => property.id === e.target.id).calculateOtherEquation, // calculating mai property by the changed property equation
                            { [properties.find(property => property.id === e.target.id).unit]: e.target.value } // replacing the changed property unit with its value
                        ).solveFor(mainProperty.unit).toString()
                    ).evaluate().text()
            }

            // calculating other values
            for (let property of properties) {
                // skiping currently typed and main property
                if (e.target.id === property.id || property === mainProperty) continue

                // calculating others
                newValues[property.id] =
                    nerdamer(
                        nerdamer(property.calculateSelfEquation, // calculating each property for it self
                            { [mainProperty.unit]: newValues[mainProperty.id] } // replacing the main property unit with its value
                        ).solveFor(property.unit).toString()
                    ).evaluate().text()
            }
        }



        setValues(newValues)
    }


    return (
        <>
            {/* geometry calculator */}
            <div className="geometry">

                {/* geometry svg shape */}
                <ShapeSvgElement {...values.shapeColoredParts} />


                {/* controls, showing it only in one main property calculators */}
                {getMainProperties(properties).length <= 1 ? <div className="dropdown-controls component-small calculators-margin-top-4">

                    {/* control label */}
                    <label htmlFor="inputs-select" className={`label control-label ${languageHelper.getClass()}`}>
                        {inputPropertyControlLabel[languageHelper.getLanguageSymbol()]}
                    </label>

                    {/* this is to add some space between the label and the dropdown */}
                    <span className="space"></span>

                    {/* inputs selectior */}
                    <select id="inputs-select" name="inputs-select" className={`dropdown inputs-select-dropdown ${languageHelper.getClass()}`}
                        defaultValue={getMainProperties(properties)[0].id}
                        onChange={changeInputProperty}>

                        {/* options */}
                        {properties.map((option, i) =>
                            <option key={i} value={option.id}>{option.name[languageHelper.getLanguageSymbol()]}</option>
                        )}
                    </select>
                </div> : ''}


                {/* input property calculator */}
                {/* only the ones that are in the values input peoperties */}
                <div className="geometry component-grid component-grid-center calculators-margin-top-2">
                    {properties.map((property, i) => {

                        // showing the input one
                        return (
                            values.inputProperties.includes(property.id) ?
                                <div key={i} className="calculator">

                                    {/* property label */}
                                    <label htmlFor={property.id} className={`label ${languageHelper.getClass()}`}>
                                        {property.name[languageHelper.getLanguageSymbol()]}
                                    </label>

                                    {/* property input */}
                                    <input type="number" id={property.id} className="input-field" autoComplete="off"
                                        placeholder={property.unit}
                                        value={values[property.id]}
                                        onChange={calculate}
                                    />
                                </div>
                                : ""
                        )
                    })}
                </div>


                {/* answers */}
                <div className="calculators-margin-top-3">

                    {/* answers label */}
                    <label className={`label ${languageHelper.getClass()}`}>
                        {answersLabel[languageHelper.getLanguageSymbol()]}
                    </label>

                    {/* each answer */}
                    {/* the ones that are not in the values input peoperties */}
                    <div className="geometry component-grid calculators-margin-top-2">
                        {properties.map((property, i) => {

                            // showing the non input ones
                            return (
                                !values.inputProperties.includes(property.id) ?
                                    <div key={i} className="calculator">

                                        {/* property label */}
                                        <label htmlFor={property.id} className={`label ${languageHelper.getClass()}`}>
                                            {property.name[languageHelper.getLanguageSymbol()]}
                                        </label>

                                        {/* property input */}
                                        <input type="number" id={property.id} className="input-field answer-field" autoComplete="off"
                                            placeholder={property.unit}
                                            value={values[property.id]}
                                            onClick={(e) => { e.target.select() }}
                                            readOnly
                                        />
                                    </div>
                                    : ""
                            )

                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export { MakeGeometryElement }