import React from 'react'

import './new-features.css'
import languageHelper from '../../../partials/languageHelper'



// component content
const componentContent = {
    title: {
        en: 'New Features',
        kr: 'تایبەتمەندیە نوێکان',
    },
    features: [
        { en: 'Added Kurdish language', kr: 'زیادکردنی زمانی کوردی' },
        { en: 'Added dark theme', kr: 'زیادکردنی دۆخی تاریک' },
        { en: 'Made the UI more user friendly', kr: 'ڕووکاری وێبسایتەکە زیاتر ئاسانکراوە بۆ بەکارهێنەر' },
        { en: 'Now you can help with improving the website by giving us ideas', kr: 'ئێستا ئەتوانیت هاوکاریمان کەیت لە بەرەوپێشبردنی وێبسایتەکە بە بیرۆکەکانت' },
        { en: 'As a developer, you can help with impoving and adding new features', kr: 'وەک پەرەپێدەرێک ئەتوانیت یارمەتیمان بەیت بە زیادکردنی تایبەتمەندی نوێ' }
    ]
}


/**
 *  @return {Element} : new fueatures element
 */
export default function NewFeatures() {

    return (
        <>
            {/* new features */}
            <div className="new-features" dir={languageHelper.getDirection()}>

                {/* new features title */}
                <h2 className={`new-features-title ${languageHelper.getClass()}`}>{componentContent.title[languageHelper.getLanguageSymbol()]}</h2>

                {/* new features list */}
                <ul className="new-features-list">

                    {/* each feature */}
                    {componentContent.features.map((feature, i) =>
                        <li className={`new-features-item ${languageHelper.getClass()}`} key={i}>
                            {feature[languageHelper.getLanguageSymbol()]}
                        </li>
                    )}

                </ul>

            </div>
        </>
    )
}
