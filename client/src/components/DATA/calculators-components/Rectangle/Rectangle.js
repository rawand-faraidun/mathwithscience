import React from 'react'

import MakeGeometryElement from '../calculators-helpers/geometry'
require('nerdamer/Algebra.js')
require('nerdamer/Calculus.js')
require('nerdamer/Solve.js')



// component content
// contains all properties details
const componentContent = {
    inputPropertyControlLabel: {
        en: 'Input',
        kr: 'بەکارهێنانی'
    },
    answersLabel: {
        en: 'Answers',
        kr: 'ئەنجامەکان'
    },
    properties: [
        {
            name: {
                en: 'Width',
                kr: 'پانی'
            },
            id: 'width',
            unit: 'w',
            calculateSelfEquation: 'w',
            calculateOtherEquation: 'w',
            main: true
        },
        {
            name: {
                en: 'Length',
                kr: 'درێژی'
            },
            id: 'length',
            unit: 'l',
            calculateSelfEquation: 'l',
            calculateOtherEquation: 'l',
            main: true
        },
        {
            name: {
                en: 'Diagonal',
                kr: 'تیرە'
            },
            id: 'diagonal',
            unit: 'd',
            calculateSelfEquation: 'd=sqrt((w^2)+(l^2))',
            calculateOtherEquation: ''
        },
        {
            name: {
                en: 'Area',
                kr: 'ڕووبەر'
            },
            id: 'area',
            unit: 'A',
            calculateSelfEquation: 'A=w*l',
            calculateOtherEquation: ''
        },
        {
            name: {
                en: 'Perimeter',
                kr: 'چێوە'
            },
            id: 'perimeter',
            unit: 'P',
            calculateSelfEquation: 'P=2*(w+l)',
            calculateOtherEquation: ''
        }
    ]
}




/**
 *  @return {Element} : Rectangle element
 */
export default function Rectangle() {

    return (
        <>
            <MakeGeometryElement componentContent={componentContent} ShapeSvgElement={RectangleSvg} />
        </>
    )
}




/**
 * @param {Object} props :
 *      @radius {Boolean} : radius of the rectangle
 *      @diameter {Boolean} : diameter of the rectangle
 *      @area {Boolean} : area of the rectangle
 *      @circumference {Boolean} : circumference of the rectangle
 * 
 *  @return {Element} : rectangle svg shape element
 */
function RectangleSvg(props) {
    return (
        <div className="margin-auto shape-width">
            <svg id="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 75">
                <rect id="area" x="2.5" y="2.5" width="100" height="70"
                    style={{ fill: props.area ? props.area : 'none' }} />
                <line id="diameter" x1="2.5" y1="2.5" x2="102.5" y2="72.5"
                    style={{
                        fill: 'none',
                        stroke: props.diameter ? props.diameter : 'var(--main-background-color)',
                        strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                    }} />
                <g id="rectangle-frame" data-name="square">
                    <line id="right" x1="102.5" y1="72.5" x2="102.5" y2="2.5"
                        style={{
                            fill: 'none',
                            stroke: props.perimeter ? props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                    <line id="bottom" x1="2.5" y1="72.5" x2="102.5" y2="72.5"
                        style={{
                            fill: 'none',
                            stroke: props.perimeter ? props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                    <line id="top" x1="102.5" y1="2.5" x2="2.5" y2="2.5"
                        style={{
                            fill: 'none',
                            stroke: props.length || props.perimeter ? props.length || props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                    <line id="left" x1="2.5" y1="2.5" x2="2.5" y2="72.5"
                        style={{
                            fill: 'none',
                            stroke: props.width || props.perimeter ? props.width || props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                </g>
            </svg>
        </div>
    )
}