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
                en: 'radius',
                kr: 'نیوەتیرە'
            },
            id: 'radius',
            unit: 'r',
            calculateSelfEquation: 'r',
            calculateOtherEquation: 'r',
            main: true
        },
        {
            name: {
                en: 'Diameter',
                kr: 'تیرە'
            },
            id: 'diameter',
            unit: 'd',
            calculateSelfEquation: 'd=r*2',
            calculateOtherEquation: 'r=d/2'
        },
        {
            name: {
                en: 'Area',
                kr: 'ڕووبەر'
            },
            id: 'area',
            unit: 'A',
            calculateSelfEquation: `A=${Math.PI}*r^2`,
            calculateOtherEquation: `r=sqrt(A/${Math.PI})`
        },
        {
            name: {
                en: 'Circumference',
                kr: 'چێوە'
            },
            id: 'circumference',
            unit: 'C',
            calculateSelfEquation: `C=${Math.PI}*r*2`,
            calculateOtherEquation: `r=C/(${Math.PI}*2)`
        }
    ]
}




/**
 *  @return {Element} : Circle element
 */
export default function Circle() {

    return (
        <>
            <MakeGeometryElement componentContent={componentContent} ShapeSvgElement={CircleSvg} />
        </>
    )
}




/**
 * @param {Object} props :
 *      @radius {Boolean} : radius of the circle
 *      @diameter {Boolean} : diameter of the circle
 *      @area {Boolean} : area of the circle
 *      @circumference {Boolean} : circumference of the circle
 * 
 *  @return {Element} : circle svg shape element
 */
function CircleSvg(props) {
    return (
        <div className="margin-auto shape-width">
            <svg id="shape" data-name="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 105">
                <circle id="frame" cx="52.5" cy="52.5" r="50"
                    style={{
                        fill: props.area ? props.area : 'none',
                        stroke: props.circumference ? props.circumference : 'var(--main-background-color)',
                        strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                    }} />
                <line id="diameter" x1="2.5" y1="52.5" x2="102.5" y2="52.5"
                    style={{
                        fill: 'none',
                        stroke: props.diameter ? props.diameter : 'var(--main-background-color)',
                        strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                    }} />
                <line id="radius" x1="21.6" y1="13.19" x2="52.5" y2="52.5"
                    style={{
                        fill: 'none',
                        stroke: props.radius ? props.radius : 'var(--main-background-color)',
                        strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '5px'
                    }} />
            </svg>
        </div>
    )
}