import React from 'react'
import { Helmet } from 'react-helmet'

import './privacy-policy.css'
import languageHelper from '../../partials/languageHelper'



// component content
const componentContent = {
    head: {
        en: 'Privacy Policy',
        kr: 'سیاسەتی تایبەتی'
    },
    questions: [
        {
            title: {
                en: 'Does math with science collect any user data?',
                kr: 'ئایا "Math with Science" داتای بەکارهێنەرانی کۆدەکاتەوە؟'
            },
            answer: {
                en: `No, this website does not collect any user data even the numbers or searchs user input to the website. and the best evidence is that the
                 website is Open Source software, which means anyone can see the codes behind it and check them for anything suspicious.`,
                kr: `نەخێر، ئەم وێبسایتە هیچ داتایەکی بەکارهێنەرانی کۆناکاتەوە تەنانەت ژمارە و گەڕانەکانیش. باشترین بەڵگەش بۆ ئەمە ئەوەیە کە
                    وێبسایتەکە سەرچاوە کراوەیە، ئەمەش واتا هەموو کەسێک ئەتوانێت کۆدەکانی کارکردنی وێبسایتەکە ببینێت و پشکنین بکات بۆ هەر شتێکی گوماناوی.`
            }
        },
        {
            title: {
                en: 'Why does Math with Science uses Cookies & localStorage?',
                kr: 'بۆچی "Math with Science" کووکی و کۆگای ناوخۆیی "بەشێکە لە براوسەری کۆمپیوتەر" بەکار ئەهێنێت؟'
            },
            answer: {
                en: `Math with Scince uses cookies and localStorage to store user perferences and it is only used to remember "Theme Color" and "Language",
                and they are just for getting user experience better and we don't save any other datas.`,
                kr: `"Math with Science" کووکی و کۆگای ناوخۆیی بەکار ئەهێنێت تەنها بۆ هەڵگرتنی "ڕەنگی وێبسایت" و "زمانی هەڵبژێردراو" و ئەوانەش تەنها بۆ
                باشترکردنی مامەڵەی بەکارهێنەرە لەگەڵ وێبسایتەکە و هیچ داتایەکی تر سەیڤ ناکرێت.`
            }
        },
    ]
}




/**
 *  @return {Element} : privacy policy route
 */
export default function PrivacyPolicy() {
    return (
        <>

            {/* overriding document head */}
            <Helmet>
                <title>{componentContent.head[languageHelper.getLanguageSymbol()]} | Math with Science</title>
                <meta name="description" content={`${componentContent.head[languageHelper.getLanguageSymbol()]}`} />
            </Helmet>


            {/* privacy policy */}
            <div className="privacy-policy long-element" dir={languageHelper.getDirection()}>

                {/* privacy policy head */}
                <h1 className={`privacy-policy-head ${languageHelper.getClass()}`}>{componentContent.head[languageHelper.getLanguageSymbol()]}</h1>

                <div className="privacy-policy-content">

                    {/* each question */}
                    {componentContent.questions.map((question, i) =>
                        <div className="privacy-policy-quesion" key={i}>
                            <h2 className={`question-title ${languageHelper.getClass()}`}>{question.title[languageHelper.getLanguageSymbol()]}</h2>
                            <p className={`question-answer ${languageHelper.getClass()}`}>{question.answer[languageHelper.getLanguageSymbol()]}</p>
                        </div>
                    )}

                </div>
            </div>
        </>
    )

}
