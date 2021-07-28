import React from 'react'
import { Link } from 'react-router-dom'

import './not-found-404.css'
// import languageHelper from '../../../partials/languageHelper'


/**
 * @param {Object} props :
 *      @invailedUrl {String} : the invailed url to be shown
 *      @customButton {Object} :
 *          @url {String} : url of the custom button
 *          @name {String} : name of the custom button
 * 
 *  @return {Element} : 404 not found element
 */
export default function NotFound404(props) {
    return (
        <>
            {/* 404 not found */}
            <div className="not-found-404">

                {/* 404 not found number */}
                <div className="number-404-container">
                    <h1 className="number-404">404</h1>
                </div>

                {/* 404 not found text */}
                <h4 className="text-404">can not find "<code className="url-404">{props.invailedUrl}</code>" page</h4>

                {/* routes buttons */}
                <div className="buttons-404">

                    {/* if there was custom button property */}
                    {
                        props.customButton !== undefined ?
                            <Link to="/" className="button" style={{ backgroundColor: 'var(--main-blue-color)' }}>Home Page</Link> :
                            ''
                    }

                    {/* home button */}
                    <Link to={props.customButton.url} className="button" style={{ backgroundColor: 'var(--main-green-color)' }}>{props.customButton.name}</Link>
                </div>
            </div>
        </>
    )
}
