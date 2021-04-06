import React from 'react';

// importing styling
import './new-features.css';

// importing components
import languageHelper from '../../partials/languageHelper';



// page content all languages
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
 *  @return : Element, returns Home page new fueatures
 *  @includes : Homepage new features
 */
function NewFeatures() {

    return (
        <div className="new-features" dir={languageHelper.getDirection()}>

            <h2 className={`new-features-title ${languageHelper.getClass()}`}>{componentContent.title[languageHelper.getLanguageSymbol()]}</h2>

            <ul className="new-features-list">

                {componentContent.features.map((feature, i) =>
                    <li className={`new-features-item ${languageHelper.getClass()}`} key={i}>{feature[languageHelper.getLanguageSymbol()]}</li>
                )}

            </ul>

        </div>
    );

}

export default NewFeatures;
