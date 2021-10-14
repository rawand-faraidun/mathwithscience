import React from 'react'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMusic } from '@fortawesome/free-solid-svg-icons'

import './about.css'
import aboutContent from './about-content'
import languageHelper from '../../partials/languageHelper'



// component content
// the content has been writen in another file as they are so much
const componentContent = aboutContent()




/**
 *  @return {Element} : calculators route
 */
export default function About() {
    return (
        <>
            {/* overriding document head */}
            <Helmet>
                <title>{componentContent.head[languageHelper.getLanguageSymbol()]} | Math with Science</title>
                <meta name="description" content="About math with science idea, project, creators, and contributors." />
                <meta name="keywords" content="math with science, math, science, online calculator, about math with science, about the developers" />

                <meta property="og:title" content={`${componentContent.head[languageHelper.getLanguageSymbol()]} | Math with Science`} />
                <meta property="og:description" content="About math with science idea, project, creators, and contributors." />
                <meta property="og:url" content={window.location.href} />
            </Helmet>


            {/* about page */}
            <div className="about" dir={languageHelper.getDirection()}>

                {/* about grid adds space between articles and creators */}
                <div className="about-grid">

                    {/* about articles */}
                    <div className="about-articles">

                        {/* ading the articles */}
                        {componentContent.articles.map((article, i) =>
                            <div className="article" key={i}>

                                {/* article heading */}
                                <h2 className={`article-heading ${languageHelper.getClass()}`}>{article.heading[languageHelper.getLanguageSymbol()]}</h2>

                                {/* article quote */}
                                <h3 className={`article-quote ${languageHelper.getClass()}`}>"{article.quote[languageHelper.getLanguageSymbol()]}"</h3>

                                {/* article writings */}
                                <div className="writing">
                                    {article.articleWritings.map((writing, j) =>
                                        <p key={j} className={`writing ${languageHelper.getClass()}`}>{writing[languageHelper.getLanguageSymbol()]}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* developers */}
                    <div className="about-developers">

                        {/* developers section title */}
                        <h4 className={`developers-title ${languageHelper.getClass()}`}>
                            {componentContent.developersSection.title[languageHelper.getLanguageSymbol()]}
                        </h4>

                        {/* developers */}
                        <div className="developers">

                            {/* each developer */}
                            {componentContent.developersSection.developers.map((developer, i) =>
                                <div key={i} className="developer">

                                    {/* developer image */}
                                    <img className="developer-image" src={developer.image} alt="" loading="lazy" />

                                    {/* developer details */}
                                    <div className="developer-details">
                                        {/* developer name */}
                                        <h4 className={`developer-name ${languageHelper.getClass()}`}>
                                            {developer.name[languageHelper.getLanguageSymbol()]}
                                        </h4>
                                        {/* developer work */}
                                        <h5 className={`developer-work ${languageHelper.getClass()}`}>
                                            {developer.work[languageHelper.getLanguageSymbol()]}
                                        </h5>
                                        {/* developer links */}
                                        <div className="developer-links">
                                            {developer.links.map((link, j) =>
                                                <a key={j} className="link" href={link.url} target="_blank" rel="noreferrer">{link.icon}</a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                {/* made with love and music */}
                <div className="made-with-love">
                    made with {<FontAwesomeIcon icon={faHeart} className="heart" />} and {<FontAwesomeIcon icon={faMusic} className="music" />}, just for you
                </div>

            </div>
        </>
    )
}
