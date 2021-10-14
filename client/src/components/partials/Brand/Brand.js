import React from 'react'
import { Link } from 'react-router-dom'

import './brand.css'



/**
 * @param {Object} props :
 *      @whiteOnly {Boolean} : this determines if the brand must be white only or not
 * 
 * @return {Element} : brand name and logo element
 */
export default function Brand(props) {

    return (
        <>
            {/* brand name and logo */}
            <div className="brand">

                <Link to='/'>

                    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.92 20.61">
                        <g style={{
                            isolation: 'isolate',
                            fill: props.whiteOnly ? 'var(--white-color)' : 'var(--main-background-color)'
                        }}>
                            <path d="M5.72,26.5a2.9,2.9,0,0,1-1.4-.3,2,2,0,0,1-.9-.9A5.41,5.41,0,0,1,3,23.8a6,6,0,0,1,0-1.9,13.64,13.64,0,0,1,.4-1.7c.2-.5.4-1,.7-1.6a7,7,0,0,1,1.3-1.7c.1,0,.2.1.3.1s.1.1.2.1.1.1.1.2a.9.9,0,0,1-.1.5l-.3.6a8.92,8.92,0,0,0-.7,1.9,5,5,0,0,0-.3,1.6v1.2a2,2,0,0,0,.2.9c.1.3.2.4.2.6l.2.2.2-.2a.52.52,0,0,0,.2-.4,2.39,2.39,0,0,0,.3-.7,6.89,6.89,0,0,1,.4-1,5,5,0,0,0,.4-1.3c.1-.5.2-.9.3-1.4.2-.9.4-2,.6-3.1a24.18,24.18,0,0,1,1-3.6,6.77,6.77,0,0,0,.6-1.6c.2-.5.4-1.2.7-1.9s.6-1.5.9-2.4c0-.1.1-.1.2-.2a.49.49,0,0,0,.3-.1c.2-.1.4-.1.6-.2a2.54,2.54,0,0,1,.7-.2c.2,0,.3,0,.4.1l.2.2v.3a5.28,5.28,0,0,0,.1,1.3v2.1a10.36,10.36,0,0,1-.1,1.6c-.1.7-.1,1.4-.2,2.1s-.1,1.4-.2,2.1a4.77,4.77,0,0,0,0,1.7v.7a1.27,1.27,0,0,0,.1.6c.2-.5.4-1.1.6-1.6s.5-1.1.7-1.6l.6-1.5c.2-.5.4-.8.5-1.1s.4-.9.7-1.5l.9-1.8c.3-.6.6-1.2.9-1.7a8,8,0,0,0,.5-1.1c.1-.1.2-.3.4-.4a4.88,4.88,0,0,1,.7-.3,6.37,6.37,0,0,0,.7-.2h.4a.52.52,0,0,1,.4.2c.1.1.1.1.1.2a.37.37,0,0,0,.1.3v.6c0,.3-.1.9-.2,1.6s-.3,1.5-.5,2.4-.4,1.9-.6,2.9l-.6,3c-.2,1-.4,1.9-.5,2.8s-.2,1.6-.3,2.2a8.62,8.62,0,0,0,.1,1.7,1.42,1.42,0,0,0,.2.6,2.19,2.19,0,0,0,.3.5.55.55,0,0,0,.5.3,1.48,1.48,0,0,0,.7.1,5.36,5.36,0,0,1-1.1.5,3.55,3.55,0,0,1-1,.2c-.4,0-.7,0-.9-.2a1.79,1.79,0,0,1-.7-.5,2,2,0,0,1-.4-.8,3.08,3.08,0,0,1-.1-1,8.57,8.57,0,0,1,.3-1.7c.2-.8.3-1.7.6-2.7s.5-2,.7-3.1.5-2.1.8-3.1.4-1.8.6-2.5a4.34,4.34,0,0,0,.2-1.3c0-.2.1-.3.1-.5s0-.3.1-.4a9.25,9.25,0,0,1-.5,1c-.2.4-.4.8-.7,1.3s-.5.9-.7,1.4-.5,1-.7,1.4c-.4.7-.7,1.5-1.1,2.3s-.7,1.5-.9,2.2-.5,1.3-.7,1.9a4.51,4.51,0,0,0-.3,1.3v.6a.37.37,0,0,0,.1.3l-.9.7c-.1,0-.2.1-.3.1h-.3a1,1,0,0,1-.8-.5,6.89,6.89,0,0,1-.5-1.8,17.8,17.8,0,0,1-.1-3.4c0-.7.1-1.3.1-2s.1-1.3.2-1.9.1-1.2.2-1.7a7.08,7.08,0,0,0,.1-1.4V9.8c0-.2-.1-.5-.1-.7a8.87,8.87,0,0,1-.3,1.4c-.2.6-.3,1.2-.5,1.9a14.19,14.19,0,0,0-.5,2.2,22.5,22.5,0,0,0-.5,2.2,18,18,0,0,0-.5,1.9c-.1.6-.3,1.1-.3,1.4-.1.6-.3,1.2-.4,2A16,16,0,0,1,8,24.2a6.71,6.71,0,0,1-.8,1.7A1.72,1.72,0,0,1,5.72,26.5Z" transform="translate(-2.94 -5.99)" />
                            <path d="M32.42,18.2c-.2.3-.5.6-.8,1.1s-.6.8-1,1.3-.7.8-1,1.2a2.3,2.3,0,0,1-.8.7.76.76,0,0,1-.5.2,1.27,1.27,0,0,1-.6.1h-.5c-.2,0-.3-.1-.5-.2a1.38,1.38,0,0,1-.3-.4c-.1-.2-.1-.4-.2-.6a2.79,2.79,0,0,1-.1-1A3.61,3.61,0,0,1,25,21.9a7.46,7.46,0,0,1-1.2.7,3.08,3.08,0,0,1-1.3.3,1.42,1.42,0,0,1-.6-.2c-.2-.1-.4-.4-.6-.6A2,2,0,0,1,21,21a5.55,5.55,0,0,1,.2-1.7,6.43,6.43,0,0,1,1-2.4,8.62,8.62,0,0,1,1.4-1.8,4.79,4.79,0,0,1,1.5-1.1,1.52,1.52,0,0,1,1.2-.3,4.65,4.65,0,0,1,.9.3c.2.1.3.4.4.6s-.1.6-.4,1.1a4.33,4.33,0,0,0,.5-.1h.5v.2a1.09,1.09,0,0,1-.1.5,5.76,5.76,0,0,1-.2,1c-.1.4-.2,1-.3,1.6,0,.1-.1.2-.1.4s0,.2-.1.3,0,.2-.1.4a4.33,4.33,0,0,0-.1.5v.4c0,.2,0,.3.1.4s.1.2.2.3.2.1.4.1a1.55,1.55,0,0,0,.6-.3,4.62,4.62,0,0,0,.7-.7,6.47,6.47,0,0,1,.8-.9c.3-.3.5-.7.8-1a5.72,5.72,0,0,1,.7-.8c.2-.2.3-.4.4-.5s.2-.2.3-.2a.37.37,0,0,1,.3.1c.1.1.1.2,0,.4C32.62,17.8,32.52,18,32.42,18.2Zm-6.3,1c.1-.3.2-.6.3-1s.2-.8.3-1.1a6.37,6.37,0,0,1,.2-.9v-.3c-.1,0-.2,0-.2.1s-.2.1-.3.1a.37.37,0,0,0-.3.1,1.42,1.42,0,0,0,.2-.6v-.4c0-.1,0-.2-.1-.2s-.4,0-.8.3A9.22,9.22,0,0,0,24,17.2a6.12,6.12,0,0,0-.5,1.2l-.3,1.2a1.7,1.7,0,0,0,0,1c0,.3.1.5.2.5a.55.55,0,0,0,.5.2,1.42,1.42,0,0,0,.6-.2,2.09,2.09,0,0,0,.6-.4,2.65,2.65,0,0,1,.6-.5c.2-.2.3-.4.4-.5C26,19.4,26,19.2,26.12,19.2Z" transform="translate(-2.94 -5.99)" />
                            <path d="M38.82,17.1l.2-.2h.2c.1,0,.1.1.1.2a.76.76,0,0,1-.1.4c-.3.5-.7,1.1-1.1,1.8l-1.5,1.8a9.6,9.6,0,0,1-1.5,1.4,1.91,1.91,0,0,1-1.2.5,2.13,2.13,0,0,1-1.2-.3A1.58,1.58,0,0,1,32,22a3.55,3.55,0,0,1-.4-.9,2.77,2.77,0,0,1-.1-.9c0-.2.1-.6.2-1.2s.2-1.3.3-2.1.3-1.6.5-2.5.4-1.8.6-2.6c-.2,0-.5.1-.7.1h-.7a5.07,5.07,0,0,1-1.3-.2,4.65,4.65,0,0,1-.9-.3c-.1-.1-.2-.1-.2-.2s.1-.2.1-.3l.3-.3c.2,0,.3-.1.4-.1.3,0,.6.1.9.1h1a2.2,2.2,0,0,0,.8-.1c.3,0,.5-.1.7-.1.2-.7.4-1.3.5-1.8a3.83,3.83,0,0,1,.5-1.1c0-.1.1-.1.3-.2s.3-.1.5-.1h.5c.2,0,.3.1.3.2a2.22,2.22,0,0,1,.1.9,14.05,14.05,0,0,1-.2,1.8,8.08,8.08,0,0,1,1.6.1c.5.1.9.1,1.2.2a3.09,3.09,0,0,0,.8.2c.2.1.4.1.5.2a.22.22,0,0,1,.2.2.76.76,0,0,1-.1.4c-.1.1-.1.2-.2.3s-.2.1-.4.1a1.09,1.09,0,0,1-.5-.1c-.2,0-.4-.1-.6-.1s-.5-.1-.9-.1h-1.8c-.1.2-.1.5-.2.7s-.1.5-.2.7c-.2.6-.4,1.2-.6,1.9s-.5,1.3-.8,2a24.43,24.43,0,0,1-1,2.4,3.22,3.22,0,0,0,0,1.4c.1.3.2.6.4.7s.4.2.7.3a1.34,1.34,0,0,0,.8-.2c.3-.2.6-.4,1-.7a9.43,9.43,0,0,0,1-1c.3-.4.6-.7.9-1.1a7.27,7.27,0,0,1,.8-.9A.55.55,0,0,0,38.82,17.1Z" transform="translate(-2.94 -5.99)" />
                            <path d="M48.62,17.8c.1-.1.2-.2.3-.2a.35.35,0,0,1,.4.4.76.76,0,0,1-.2.4,10.63,10.63,0,0,1-.9,1.1,11.41,11.41,0,0,1-1.1,1.1c-.4.4-.8.7-1.2,1.1a8.34,8.34,0,0,1-1.2.8,3,3,0,0,1-1.1.4,1.21,1.21,0,0,1-.9-.6,1.5,1.5,0,0,1-.4-1.1,7.84,7.84,0,0,1,.2-1.4,9.29,9.29,0,0,1,.4-1.3,10.26,10.26,0,0,0,.4-1.4,5.28,5.28,0,0,0,.1-1.2c0-.4-.2-.4-.5-.4a1.85,1.85,0,0,0-.7.2c-.3.2-.5.4-.8.6l-.8.8a4.7,4.7,0,0,0-.6.9c-.1.6-.2,1.1-.3,1.7l-.3,1.5c-.1.5-.2,1-.3,1.4-.1.1-.2.1-.3.2h-.6c-.1,0-.2-.1-.3-.1s-.2-.1-.3-.2a.52.52,0,0,1-.2-.4c.6-2.6,1.2-4.8,1.5-6.4s.7-2.8.9-3.7.4-1.7.5-2.1.1-.5.1-.8V8.4a1.7,1.7,0,0,0-.1-.7c.1-.1.2-.1.4-.2s.3-.1.4-.1a.6.6,0,0,0,.4.1h.7a.35.35,0,0,1,.2.1c.1.1.1.2.1.4a2,2,0,0,1-.1.7c-.1.3-.1.6-.2.9a33.74,33.74,0,0,1-1,3.4,35.74,35.74,0,0,0-1,3.5,5.5,5.5,0,0,1,.7-.9,6,6,0,0,1,.8-.8,2.07,2.07,0,0,1,1-.6,2,2,0,0,1,1.1-.2,1.27,1.27,0,0,1,.6.1c.2.1.3.2.5.3l.3.6a2.77,2.77,0,0,1,.1.9,1.7,1.7,0,0,1-.1.7c-.1.2-.1.5-.2.8s-.2.6-.3,1a6.12,6.12,0,0,1-.5,1.2,6.89,6.89,0,0,1-.3.8.64.64,0,0,0,0,.6c.1.2.4.3.8.2a6.45,6.45,0,0,0,1.7-1.1,2.65,2.65,0,0,0,.6-.5,4.35,4.35,0,0,0,.6-.7l.6-.6A2.74,2.74,0,0,1,48.62,17.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M65.22,18.8a10.09,10.09,0,0,1-.7,1.5,6,6,0,0,1-.9,1.3,4.06,4.06,0,0,1-1,.9,2.38,2.38,0,0,1-1.2.3,1.58,1.58,0,0,1-1.5-.7,4.36,4.36,0,0,1-.7-1.7l-.6.9a5.72,5.72,0,0,1-.7.8c-.3.2-.5.4-.8.6a2.35,2.35,0,0,1-.8.2,2,2,0,0,1-.9-.2,1.34,1.34,0,0,1-.6-.7,3,3,0,0,1-.4-1,1.5,1.5,0,0,1-.2-1v-.3a8.6,8.6,0,0,1,.1-1.6c.1-.5.2-1.1.3-1.5s.2-.9.3-1.2a1.54,1.54,0,0,1,.3-.7,1.4,1.4,0,0,1,.7-.4,3.55,3.55,0,0,1,1-.2c.2,0,.2.1.2.2a.6.6,0,0,1-.1.4,5.31,5.31,0,0,0-.3,1.1c-.1.5-.3,1-.4,1.6a10.46,10.46,0,0,0-.4,1.7,9.32,9.32,0,0,0-.2,1.4,2.15,2.15,0,0,0,.2,1,.78.78,0,0,0,.7.3,1.73,1.73,0,0,0,1.2-.6,6.89,6.89,0,0,0,1.3-2v-.6a10.28,10.28,0,0,1,.1-1.8,5.67,5.67,0,0,1,.3-1.5,10.91,10.91,0,0,1,.6-1.1,1.28,1.28,0,0,1,1-.4.71.71,0,0,1,.6.6,5.94,5.94,0,0,1-.5,1.9c-.3.8-.7,1.8-1.1,2.8,0,.1-.1.1-.1.2a2.92,2.92,0,0,0,.2.9,6.89,6.89,0,0,0,.3.8,1.54,1.54,0,0,0,.4.6c.2.2.3.2.6.2a1.38,1.38,0,0,0,.9-.5,4.13,4.13,0,0,0,.7-1.1,5.78,5.78,0,0,0,.5-1.4,9.29,9.29,0,0,0,.4-1.3c0-.2-.1-.3-.1-.5v-.5a3.59,3.59,0,0,1,.2-1.1,2.18,2.18,0,0,1,.5-.8,1.79,1.79,0,0,1,.7-.5,1.85,1.85,0,0,1,.7-.2c.4,0,.5.2.5.5s-.1.6-.2,1.2a18,18,0,0,1-.5,1.9,3,3,0,0,0,1,.2,3.08,3.08,0,0,0,1-.1,3.55,3.55,0,0,0,.9-.4,1.79,1.79,0,0,0,.7-.5c.2-.2.4-.3.6-.5s.3-.1.4,0a.45.45,0,0,1,0,.5,1.7,1.7,0,0,1-.6.6,8.65,8.65,0,0,1-1,.7c-.4.2-.8.4-1.3.6a3.89,3.89,0,0,1-1.5.2h-.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M70,14.4a.52.52,0,0,1,.4-.2,1.27,1.27,0,0,1,.6-.1c.2,0,.4-.1.6-.1h.3a1.75,1.75,0,0,1-.1.5c-.1.3-.2.6-.3,1s-.3.8-.4,1.2a5.39,5.39,0,0,0-.3,1,9.44,9.44,0,0,0-.3.9l-.3.9c-.1.3-.1.6-.2.9s0,.5.1.6.2.3.2.4.2.1.3.1a2.5,2.5,0,0,0,1.1-.5A12.67,12.67,0,0,0,73,19.9a15.93,15.93,0,0,0,1.3-1.3,7.29,7.29,0,0,0,.9-1.1,1.38,1.38,0,0,1,.4-.3h.3a.37.37,0,0,1,.1.3,1.09,1.09,0,0,1-.1.5,9.38,9.38,0,0,1-1,1.4,10.7,10.7,0,0,1-1.4,1.6A17.38,17.38,0,0,1,72,22.3a3.29,3.29,0,0,1-1.2.6,1.7,1.7,0,0,1-.7-.1c-.2-.1-.5-.2-.6-.4a2.65,2.65,0,0,1-.5-.6,1.85,1.85,0,0,1-.2-.7V19.6a11.08,11.08,0,0,1,.2-1.9c.1-.7.3-1.3.4-1.9A2.29,2.29,0,0,1,70,14.4Zm2.9-4.6c0,.2-.1.3-.2.5s-.3.3-.4.4-.3.2-.5.2-.3,0-.4-.1a1,1,0,0,1-.5-.7,1.2,1.2,0,0,1,.2-.8,2.65,2.65,0,0,1,.5-.6,1.55,1.55,0,0,1,.6-.3c.2,0,.3,0,.4.1a.52.52,0,0,1,.2.4.9.9,0,0,1,.1.5A.3.3,0,0,1,72.92,9.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M82.22,17.1l.2-.2h.2c.1,0,.1.1.1.2a.76.76,0,0,1-.1.4c-.3.5-.7,1.1-1.1,1.8L80,21.1a9.6,9.6,0,0,1-1.5,1.4,1.91,1.91,0,0,1-1.2.5,2.13,2.13,0,0,1-1.2-.3,1.58,1.58,0,0,1-.7-.7,3.55,3.55,0,0,1-.4-.9,2.77,2.77,0,0,1-.1-.9c0-.2.1-.6.2-1.2s.2-1.3.3-2.1.3-1.6.5-2.5.4-1.8.6-2.6c-.2,0-.5.1-.7.1h-.7a5.07,5.07,0,0,1-1.3-.2,4.65,4.65,0,0,1-.9-.3c-.1-.1-.2-.1-.2-.2s.1-.2.1-.3l.3-.3c.1,0,.2-.1.3-.1.3,0,.6.1.9.1h1a2.2,2.2,0,0,0,.8-.1c.3,0,.5-.1.7-.1.2-.7.4-1.3.5-1.8a3.83,3.83,0,0,1,.5-1.1c0-.1.1-.1.3-.2s.3-.1.5-.1h.5c.2,0,.3.1.3.2s.1.4.1.9a14.05,14.05,0,0,1-.2,1.8,8.08,8.08,0,0,1,1.6.1c.5.1.9.1,1.2.2a3.09,3.09,0,0,0,.8.2c.2.1.4.1.5.2a.22.22,0,0,1,.2.2.76.76,0,0,1-.1.4c-.1.1-.1.2-.2.3s-.2.1-.4.1a1.09,1.09,0,0,1-.5-.1c-.2,0-.4-.1-.6-.1s-.5-.1-.9-.1h-1.8c-.1.2-.1.5-.2.7s-.1.5-.2.7c-.2.6-.4,1.2-.6,1.9s-.5,1.3-.8,2a24.43,24.43,0,0,1-1,2.4,3.22,3.22,0,0,0,0,1.4c.1.3.2.6.4.7s.4.2.7.3a1.34,1.34,0,0,0,.8-.2c.3-.2.6-.4,1-.7a9.43,9.43,0,0,0,1-1c.3-.4.6-.7.9-1.1a7.27,7.27,0,0,1,.8-.9C82.22,17.5,82.12,17.2,82.22,17.1Z" transform="translate(-2.94 -5.99)" />
                            <path d="M92,17.8c.1-.1.2-.2.3-.2a.35.35,0,0,1,.4.4.76.76,0,0,1-.2.4,10.63,10.63,0,0,1-.9,1.1,11.41,11.41,0,0,1-1.1,1.1c-.4.4-.8.7-1.2,1.1a8.34,8.34,0,0,1-1.2.8,3,3,0,0,1-1.1.4,1.21,1.21,0,0,1-.9-.6,1.5,1.5,0,0,1-.4-1.1,7.84,7.84,0,0,1,.2-1.4,9.29,9.29,0,0,1,.4-1.3,10.26,10.26,0,0,0,.4-1.4,5.28,5.28,0,0,0,.1-1.2c0-.4-.3-.4-.6-.4a1.85,1.85,0,0,0-.7.2c-.3.2-.5.4-.8.6l-.8.8a4.7,4.7,0,0,0-.6.9c-.1.6-.2,1.1-.3,1.7l-.3,1.5c-.1.5-.2,1-.3,1.4-.1.1-.2.1-.3.2h-.6c-.1,0-.2-.1-.3-.1s-.2-.1-.3-.2a.52.52,0,0,1-.2-.4c.6-2.6,1.2-4.8,1.5-6.4s.7-2.8.9-3.7.4-1.7.5-2.1.1-.5.1-.8V8.4a1.7,1.7,0,0,0-.1-.7c.1-.1.2-.1.4-.2s.3-.1.4-.1a.6.6,0,0,0,.4.1h.7a.35.35,0,0,1,.2.1c.1.1.1.2.1.4a2,2,0,0,1-.1.7c-.1.3-.1.6-.2.9a33.74,33.74,0,0,1-1,3.4,35.74,35.74,0,0,0-1,3.5,5.5,5.5,0,0,1,.7-.9,6,6,0,0,1,.8-.8,2.07,2.07,0,0,1,1-.6,2,2,0,0,1,1.1-.2,1.27,1.27,0,0,1,.6.1c.2.1.3.2.5.3l.3.6a2.77,2.77,0,0,1,.1.9,1.7,1.7,0,0,1-.1.7c-.1.2-.1.5-.2.8s-.2.6-.3,1a6.12,6.12,0,0,1-.5,1.2,6.89,6.89,0,0,1-.3.8.64.64,0,0,0,0,.6c.1.2.4.3.8.2a6.45,6.45,0,0,0,1.7-1.1,2.65,2.65,0,0,0,.6-.5,4.35,4.35,0,0,0,.6-.7l.6-.6A1.18,1.18,0,0,1,92,17.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M105.22,12.6a.49.49,0,0,1,.1-.3,4.88,4.88,0,0,0,.3-.7,3.55,3.55,0,0,1,.4-.9c.1-.3.2-.7.3-1V8.6a1.91,1.91,0,0,0-.5-1,.71.71,0,0,0-.6-.3,3.08,3.08,0,0,0-.9.1,9.74,9.74,0,0,0-1.1.5,3.92,3.92,0,0,0-1,.8,3.92,3.92,0,0,0-.8,1,4.87,4.87,0,0,0-.4,1.1v.8a1.85,1.85,0,0,0,.2.7l.3.6a2.19,2.19,0,0,0,.3.5c.1.2.3.4.5.7l.8.8c.3.3.6.7.9,1a14.8,14.8,0,0,1,.8,1.3,7.49,7.49,0,0,1,.5,1.6,6.69,6.69,0,0,1,0,2,9.56,9.56,0,0,1-.8,2.7,6.23,6.23,0,0,1-1.1,1.7,4.7,4.7,0,0,1-1.2.9c-.4.2-.8.3-1,.4s-.5.1-.8.1h-.9c-.3-.1-.6-.2-1-.3a5.5,5.5,0,0,1-.9-.7,4.73,4.73,0,0,1-.7-1.2,5.64,5.64,0,0,1-.4-1.2,3.93,3.93,0,0,1,.1-1.5,1.38,1.38,0,0,1,.4-.3c.1-.1.3-.2.4-.3a.76.76,0,0,1,.5-.2c.2-.1.4-.1.6-.2a.9.9,0,0,0,.5-.1.9.9,0,0,1,.5.1,3,3,0,0,0-.5.7.37.37,0,0,0-.1.3,3.08,3.08,0,0,0-.1,1,4.25,4.25,0,0,0,.2,1.1,1.46,1.46,0,0,0,.6.9,1.28,1.28,0,0,0,1,.4q1.5,0,2.7-2.4a4.19,4.19,0,0,0,.4-1.6,7.72,7.72,0,0,0-.2-1.5,7.84,7.84,0,0,0-.5-1.4,4.13,4.13,0,0,0-.7-1.1c-.2-.3-.5-.6-.8-1a10,10,0,0,0-1-1.1,6.38,6.38,0,0,1-.8-1.4,4.28,4.28,0,0,1-.5-1.6,5.34,5.34,0,0,1,.2-2.2,4.87,4.87,0,0,1,1.1-1.8A5.66,5.66,0,0,1,102,6.8a5.34,5.34,0,0,1,1.4-.6q3.45-.75,4.5,1.2a3,3,0,0,1,.5,1.5,7.57,7.57,0,0,1-.1,1.5,8.11,8.11,0,0,1-.3,1.1c-.1.3-.2.5-.3.5a1.38,1.38,0,0,1-.4.3,4.65,4.65,0,0,1-.9.3h-.6C105.42,12.7,105.32,12.7,105.22,12.6Z" transform="translate(-2.94 -5.99)" />
                            <path d="M111.42,21.8a3.74,3.74,0,0,0,1.5-.5c.5-.4,1.1-.8,1.6-1.2a10,10,0,0,0,1.4-1.5c.4-.5.7-.9,1-1.2a.54.54,0,0,1,.4-.3.35.35,0,0,1,.4.4c0,.2-.1.3-.2.5s-.3.4-.5.7-.5.7-.8,1.1a12,12,0,0,1-1.1,1.2,6.89,6.89,0,0,1-1.3,1.1,6.38,6.38,0,0,1-1.4.8,3.53,3.53,0,0,1-1.4.3,2.73,2.73,0,0,1-1.6-.4c-.4-.3-.8-.5-1-.9a3.08,3.08,0,0,1-.5-1.2,5.85,5.85,0,0,1-.2-1.3,6.75,6.75,0,0,1,.3-1.7,6.63,6.63,0,0,1,.9-1.9,7.52,7.52,0,0,1,1.5-1.6,3.77,3.77,0,0,1,2.1-.7,1.85,1.85,0,0,1,1.2.5,1.73,1.73,0,0,1,.5,1.3,2.2,2.2,0,0,1-.1.8,4.88,4.88,0,0,1-.3.7c-.1.2-.3.3-.5.5a1.42,1.42,0,0,1-.6.2.52.52,0,0,1-.4-.2.76.76,0,0,1-.2-.5v-.5c0-.1,0-.3.1-.3l.2-.2a1.44,1.44,0,0,0,.3-.2.22.22,0,0,0,.2-.2c0-.1.1-.2.1-.3a.35.35,0,0,0-.4-.4,1.74,1.74,0,0,0-.7.3,4.06,4.06,0,0,0-1,.9,5.43,5.43,0,0,0-.9,1.5,4.64,4.64,0,0,0-.4,2.1,2.17,2.17,0,0,0,.2,1.2,1.79,1.79,0,0,0,.5.7,2.51,2.51,0,0,0,.7.4C110.92,21.7,111.12,21.8,111.42,21.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M117.52,14.4a.52.52,0,0,1,.4-.2,1.27,1.27,0,0,1,.6-.1c.2,0,.4-.1.6-.1h.3a1.75,1.75,0,0,1-.1.5c-.1.3-.2.6-.3,1s-.3.8-.4,1.2a5.39,5.39,0,0,0-.3,1,9.44,9.44,0,0,0-.3.9l-.3.9c-.1.3-.1.6-.2.9s0,.5.1.6.2.3.2.4.2.1.3.1a2.5,2.5,0,0,0,1.1-.5,12.67,12.67,0,0,0,1.3-1.1,15.93,15.93,0,0,0,1.3-1.3,7.29,7.29,0,0,0,.9-1.1,1.38,1.38,0,0,1,.4-.3c.2-.1.2,0,.3,0a.37.37,0,0,1,.1.3,1.09,1.09,0,0,1-.1.5,9.38,9.38,0,0,1-1,1.4A10.7,10.7,0,0,1,121,21a17.38,17.38,0,0,1-1.5,1.3,3.29,3.29,0,0,1-1.2.6,1.7,1.7,0,0,1-.7-.1c-.2-.1-.5-.2-.6-.4a2.65,2.65,0,0,1-.5-.6,1.85,1.85,0,0,1-.2-.7V19.6a11.08,11.08,0,0,1,.2-1.9c.1-.7.3-1.3.4-1.9A2.29,2.29,0,0,1,117.52,14.4Zm2.9-4.6c0,.2-.1.3-.2.5s-.3.3-.4.4-.3.2-.5.2-.3,0-.4-.1a1,1,0,0,1-.5-.7,1.2,1.2,0,0,1,.2-.8,2.65,2.65,0,0,1,.5-.6.86.86,0,0,1,.6-.3c.2,0,.3,0,.4.1a.52.52,0,0,1,.2.4.9.9,0,0,1,.1.5A.3.3,0,0,1,120.42,9.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M131.52,18a11.92,11.92,0,0,1-1.5,1.8,12.88,12.88,0,0,1-1.7,1.6,7.24,7.24,0,0,1-1.9,1.1,4.64,4.64,0,0,1-1.9.4,3.55,3.55,0,0,1-1-.2,3,3,0,0,1-1-.7,3.46,3.46,0,0,1-.7-1.2,5,5,0,0,1-.2-1.8,7.67,7.67,0,0,1,.5-1.9,10.81,10.81,0,0,1,1.1-1.8,19.2,19.2,0,0,1,1.5-1.4,2.79,2.79,0,0,1,1.7-.5,1.59,1.59,0,0,1,1.2.4,1.21,1.21,0,0,1,.3,1,2.45,2.45,0,0,1-.4,1.2,8.65,8.65,0,0,1-.7,1,6.47,6.47,0,0,1-.9.8c-.3.2-.6.5-.9.7l-.9.6a3.51,3.51,0,0,1-.8.5,2,2,0,0,0,.2.9c.1.2.3.4.4.6a.71.71,0,0,0,.6.3c.2,0,.4.1.7.1a3,3,0,0,0,1.5-.5c.5-.3,1-.7,1.6-1.1a9.27,9.27,0,0,0,1.4-1.4,14.25,14.25,0,0,1,1.1-1.2c.1-.1.2-.2.3-.2h.3c.1.1.1.1.1.3S131.62,17.9,131.52,18ZM126,14.7a.86.86,0,0,0-.6.3,4.62,4.62,0,0,0-.7.7,6.66,6.66,0,0,0-.6,1.2,7.49,7.49,0,0,0-.5,1.6c.2-.1.4-.3.6-.4s.4-.3.6-.4c.6-.5,1-.9,1.3-1.2a3.08,3.08,0,0,0,.4-.9c0-.3,0-.5-.1-.6A.54.54,0,0,0,126,14.7Z" transform="translate(-2.94 -5.99)" />
                            <path d="M136.32,23a1.88,1.88,0,0,1-.8-.2,2.65,2.65,0,0,1-.6-.5,4.88,4.88,0,0,1-.3-.7v-.8a3.09,3.09,0,0,1,.2-.8c.1-.3.2-.7.3-1.1l.3-1.2a5.16,5.16,0,0,0,.2-1.1v-.8c-.1-.2-.2-.3-.4-.3a1.85,1.85,0,0,0-.7.2c-.2.2-.5.4-.7.6s-.5.6-.8.9a6.07,6.07,0,0,0-.7,1c-.1.5-.2.9-.3,1.3a4.4,4.4,0,0,0-.2,1c-.1.3-.1.6-.2.8s-.1.4-.2.6-.2.3-.4.4a4.88,4.88,0,0,1-.7.3,1.49,1.49,0,0,1-.6.1c-.1,0-.3-.1-.2-.2a3.54,3.54,0,0,0,.1-.6,6.15,6.15,0,0,1,.3-1.1c.1-.4.2-.8.3-1.3s.2-.9.3-1.3a3.59,3.59,0,0,0,.2-1.1,10.38,10.38,0,0,0,.3-1.2,8.33,8.33,0,0,1,.4-1.5c.1-.1.2-.2.3-.2s.2-.1.3-.1.2-.1.4-.1h.3a.37.37,0,0,1,.3.1c.1,0,.2.1.3.2s-.1.2-.2.4-.1.4-.2.6-.1.5-.2.7c.2-.3.4-.5.6-.8a2.7,2.7,0,0,1,.8-.7,4.05,4.05,0,0,1,.9-.5,3,3,0,0,1,1-.2,1.45,1.45,0,0,1,.7.2,1.79,1.79,0,0,1,.5.7,3,3,0,0,1,.2,1,3.18,3.18,0,0,1-.2,1.3l-.2.9c-.1.3-.2.7-.3,1.1a6.47,6.47,0,0,1-.4,1.3,2.49,2.49,0,0,0-.1.8c0,.2.2.3.4.3a2.26,2.26,0,0,0,1-.5,12,12,0,0,0,1.2-1.1,7.55,7.55,0,0,0,1.1-1.4c.4-.5.6-.8.8-1.1s.3-.3.4-.4a.19.19,0,0,1,.3,0c.1.1.1.1.1.3s-.1.3-.2.6a9.22,9.22,0,0,1-.5.8,10.54,10.54,0,0,0-.7,1.1c-.3.4-.6.7-.9,1.1a9.43,9.43,0,0,1-1,1,7.63,7.63,0,0,1-1.1.8C136.72,22.8,136.62,23,136.32,23Z" transform="translate(-2.94 -5.99)" />
                            <path d="M143.82,21.8a3.74,3.74,0,0,0,1.5-.5c.5-.4,1.1-.8,1.6-1.2a10,10,0,0,0,1.4-1.5c.4-.5.7-.9,1-1.2a.54.54,0,0,1,.4-.3.35.35,0,0,1,.4.4c0,.2-.1.3-.2.5s-.3.4-.5.7-.5.7-.8,1.1a12,12,0,0,1-1.1,1.2,6.89,6.89,0,0,1-1.3,1.1,6.38,6.38,0,0,1-1.4.8,3.53,3.53,0,0,1-1.4.3,2.73,2.73,0,0,1-1.6-.4c-.4-.3-.8-.5-1-.9a3.08,3.08,0,0,1-.5-1.2,5.85,5.85,0,0,1-.2-1.3,6.75,6.75,0,0,1,.3-1.7,6.63,6.63,0,0,1,.9-1.9,7.52,7.52,0,0,1,1.5-1.6,3.77,3.77,0,0,1,2.1-.7,1.85,1.85,0,0,1,1.2.5,1.73,1.73,0,0,1,.5,1.3,2.2,2.2,0,0,1-.1.8,4.88,4.88,0,0,1-.3.7c-.1.2-.3.3-.5.5a1.42,1.42,0,0,1-.6.2.52.52,0,0,1-.4-.2.76.76,0,0,1-.2-.5v-.5c0-.1,0-.3.1-.3l.2-.2a1.44,1.44,0,0,0,.3-.2.22.22,0,0,0,.2-.2c0-.1.1-.2.1-.3a.35.35,0,0,0-.4-.4,1.74,1.74,0,0,0-.7.3,4.06,4.06,0,0,0-1,.9,5.43,5.43,0,0,0-.9,1.5,4.64,4.64,0,0,0-.4,2.1,2.17,2.17,0,0,0,.2,1.2,1.79,1.79,0,0,0,.5.7,2.51,2.51,0,0,0,.7.4C143.32,21.7,143.52,21.8,143.82,21.8Z" transform="translate(-2.94 -5.99)" />
                            <path d="M157.82,18a11.92,11.92,0,0,1-1.5,1.8,12.88,12.88,0,0,1-1.7,1.6,7.24,7.24,0,0,1-1.9,1.1,4.64,4.64,0,0,1-1.9.4,3.55,3.55,0,0,1-1-.2,3,3,0,0,1-1-.7,3.46,3.46,0,0,1-.7-1.2,5,5,0,0,1-.2-1.8,7.67,7.67,0,0,1,.5-1.9,10.81,10.81,0,0,1,1.1-1.8,19.2,19.2,0,0,1,1.5-1.4,2.79,2.79,0,0,1,1.7-.5,1.59,1.59,0,0,1,1.2.4,1.21,1.21,0,0,1,.3,1,2.45,2.45,0,0,1-.4,1.2,8.65,8.65,0,0,1-.7,1,6.47,6.47,0,0,1-.9.8c-.3.2-.6.5-.9.7l-.9.6a3.51,3.51,0,0,1-.8.5,2,2,0,0,0,.2.9c.1.2.3.4.4.6a.71.71,0,0,0,.6.3c.2,0,.4.1.7.1A3,3,0,0,0,153,21c.5-.3,1-.7,1.6-1.1a9.27,9.27,0,0,0,1.4-1.4,14.25,14.25,0,0,1,1.1-1.2c.1-.1.2-.2.3-.2h.3c.1.1.1.1.1.3A.44.44,0,0,1,157.82,18Zm-5.5-3.3a.86.86,0,0,0-.6.3,4.62,4.62,0,0,0-.7.7,6.66,6.66,0,0,0-.6,1.2,7.49,7.49,0,0,0-.5,1.6c.2-.1.4-.3.6-.4s.4-.3.6-.4c.6-.5,1-.9,1.3-1.2a3.08,3.08,0,0,0,.4-.9c0-.3,0-.5-.1-.6S152.52,14.7,152.32,14.7Z" transform="translate(-2.94 -5.99)" />
                        </g>
                        <g id="Logo-2" data-name="Logo">
                            <path id="Line" d="M179.46,8.33h0a3.14,3.14,0,0,1,0,4.4l-12.2,12.2a3.14,3.14,0,0,1-4.4,0h0a3.14,3.14,0,0,1,0-4.4l12.2-12.2A3.14,3.14,0,0,1,179.46,8.33Z" transform="translate(-2.94 -5.99)" style={{ fill: '#00cc80' }} />
                            <circle id="Lower" cx="174.42" cy="16.63" r="3.5" style={{ fill: '#00c2ff' }} />
                            <circle id="Upper" cx="162.12" cy="4.43" r="3.5" style={{ fill: '#00c2ff' }} />
                        </g>
                    </svg>

                </Link>
            </div>
        </>
    )
}