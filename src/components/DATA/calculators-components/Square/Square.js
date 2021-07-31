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
                en: 'side',
                kr: 'لا'
            },
            id: 'side',
            unit: 's',
            calculateSelfEquation: 's',
            calculateOtherEquation: 's',
            main: true
        },
        {
            name: {
                en: 'Diameter',
                kr: 'تیرە'
            },
            id: 'diameter',
            unit: 'd',
            calculateSelfEquation: 'd=s*sqrt(2)',
            calculateOtherEquation: 's=sqrt(2)/d'
        },
        {
            name: {
                en: 'Area',
                kr: 'ڕووبەر'
            },
            id: 'area',
            unit: 'A',
            calculateSelfEquation: 'A=s^2',
            calculateOtherEquation: 's=sqrt(A)'
        },
        {
            name: {
                en: 'Perimeter',
                kr: 'چێوە'
            },
            id: 'perimeter',
            unit: 'P',
            calculateSelfEquation: 'P=s*4',
            calculateOtherEquation: 's=P/4'
        }
    ]
}




/**
 *  @return {Element} : Square element
 */
export default function Square() {

    return (
        <>
            <MakeGeometryElement componentContent={componentContent} ShapeSvgElement={SquareSvg} />
        </>
    )
}




/**
 * @param {Object} props :
 *      @side {Boolean} : radius of the square
 *      @diameter {Boolean} : diameter of the square
 *      @area {Boolean} : area of the square
 *      @perimeter {Boolean} : perimeter of the square
 * 
 *  @return {Element} : square svg shape element
 */
function SquareSvg(props) {
    return (
        <div style={{ margin: 'auto', width: '10rem' }}>
            <svg id="square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 105">
                <rect id="area" x="2.5" y="2.5" width="100" height="100"
                    style={{ fill: props.area ? props.area : 'none' }} />
                <line id="diameter" x1="2.5" y1="2.5" x2="102.5" y2="102.5"
                    style={{
                        fill: 'none',
                        stroke: props.diameter ? props.diameter : 'var(--main-background-color)',
                        strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                    }} />
                <g id="square-2" data-name="square">
                    <line id="right" x1="102.5" y1="102.5" x2="102.5" y2="2.5"
                        style={{
                            fill: 'none',
                            stroke: props.perimeter ? props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                    <line id="bottom" x1="2.5" y1="102.5" x2="102.5" y2="102.5"
                        style={{
                            fill: 'none',
                            stroke: props.perimeter ? props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                    <line id="top" x1="102.5" y1="2.5" x2="2.5" y2="2.5"
                        style={{
                            fill: 'none',
                            stroke: props.perimeter ? props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                    <line id="left" x1="2.5" y1="2.5" x2="2.5" y2="102.5"
                        style={{
                            fill: 'none',
                            stroke: props.side || props.perimeter ? props.side || props.perimeter : 'var(--main-background-color)',
                            strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                        }} />
                </g>
            </svg>
        </div>
    )
}