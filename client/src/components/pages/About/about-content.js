// developers icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'

// developers images
import RawandFaraidunImage from './creator-images/rawand-faraidun.jpg'
import MhamadRzgarImage from './creator-images/mhamad-rzgar.jpg'
import ShazyarTahaImage from './creator-images/shazyar-taha.jpg'
import MhamadHassanImage from './creator-images/mhamad-hasan.jpg'


// about page contents
const aboutContent = {
    articles: [
        {
            heading: {
                en: 'The Purpouse',
                kr: 'هۆکاری بیرۆکەکە'
            },
            quote: {
                en: 'Doing more, In less time',
                kr: 'زیاتر بکەین، لە کاتێکی کەتردا'
            },
            articleWritings: [
                {
                    en: 'Math is fun, but sometimes it gets really hard in some equations and calculations.',
                    kr: 'بیرکاری خۆشە، بەڵام هەنێدک کات زۆر قورس ئەبێت لە هەندێک هاوکێشە و شیکارکردندا.'
                },
                {
                    en: `with Math with Science, You can calculate some of your math problems in a few seconds. 
                        And we do our best to add new calculators time to time.`,
                    kr: `لەگەڵ "Math with Science"، ئەتوانیت هەندێک لە پرسیارە بیرکاریەکانت شیکار بکەیت.
                        وە ئێمە هەوڵی تەواومان ئەدەین بۆ زیادکردنی ژمێرەری نوێ بە پێی کات.`
                }
            ]
        },
        {
            heading: {
                en: 'The Story',
                kr: 'چیرۆکی بیرۆکەکە'
            },
            quote: {
                en: "Let's help others, In the problems we have",
                kr: 'با یارمەتی ئەوانیتر بدەین، لەو پرسیارانەی کە خۆمان هەمانە'
            },
            articleWritings: [
                {
                    en: `The idea of this website goes back to 2019, As a student I've had many issues with math, 
                        althrough I really love it, But sometimes it got out of my control.  I got the idea right in math class as I said 
                        "I will help others who have the same problems as mine".`,
                    kr: `بیرۆکەی ئەم وێبسایتە بۆ ساڵی ٢٠١٩ ئەگەڕێتەوە، وەک خوێندکارێک زۆرجار کێشەم هەبوو لەگەڵ بیرکاری،
                        لەگەڵ ئەوەشدا کە زۆرم خۆش ئەوێت، بەڵام هەندێک جار لە کۆنترۆڵی من دەرئەچێت. بیرۆکەکەم لە ناوەڕاستی وانەی بیرکاری بۆ هات کەوتم
                        "یارمەتی ئەوانە ئەدەم کە هەمان پرسیارەکانی منیان هەیە".`
                },
                {
                    en: `After graduation my first semister. I started to think about it more and I gathered information about some math calculators.
                        then I started to build them slowly, Then I got help by my friends 'Mhamad Rzgar', 'Shazyar Taha', & 'Mhamad Hassan' and they began collecting 
                        information about other calculators with me and giving me Ideas of how to build and improve them properly so everyone get's to love it.`,
                    kr: `دوای سەرکەوتنم لە قۆنا‌غی یەکەمی زانکۆ، زیاتر بیرم لێئەکردەوە و زانیاریم کۆکردەوە دەرباری هەندێک ژمێرەری زیرکاری.
                        دواتر هەستام بە درووستکردنان بە هێواشی، پاشان هاوڕێکانم 'محەمەد ڕزگار'، 'شازیار تەها'، و 'معەمەد حەسەن' کە هەستان بە کۆکردنەوەی
                        ژمێرەری تر و پێدانی بیرۆکەی چۆن دروستیان بکەم و بەرەوپێشیان ببەم کە هەمووکەس بەدڵی بێت.`
                },
                {
                    en: `After a few months we brought the idea to life and you can use it, Althrough it won't solve much math problems, 
                        but together we try our best to improve it`,
                    kr: `دوای چەندمانگێک بیرۆکەکەمان کرد بە ڕاستی و ئەتوانن بەکاری بهێنن، هەرچەنە زۆر لە پرسیارەکان هەژمار ناکات،
                        بەڵام بەیەکەوە هەموو هەوڵێک ئەیەین کە بەرەوپێشی بەرین.`
                },
            ]
        },
        {
            heading: {
                en: 'The Future',
                kr: 'داهاتووی بیرۆکەکە'
            },
            quote: {
                en: "We will solve math problems, Together",
                kr: 'پرسیارە بیرکاریەکان شیکار ئەکەین، بەیەکەوە'
            },
            articleWritings: [
                {
                    en: 'As time goes, We try to bring you more amazing and helpful feautrues. with your help, we will be unstopable.',
                    kr: 'بە پێی کات، هەوڵئەدەین تایبەتمەندی نوێی یارمەتیدەرتان بۆ زیاد کەین. وە بە یارمەتی ئێوە، هیچ شتێک نامانوەستێنێت.'
                },
            ]
        },
        {
            heading: {
                en: 'Your Help',
                kr: 'یارمەتی ئێوە'
            },
            quote: {
                en: "Your help helps others",
                kr: 'یارمەتی ئێوە یارمەتی کەسانی تر ئەیات'
            },
            articleWritings: [
                {
                    en: "As a small group, We can't bring much fast, but if you help us We can improve the development.",
                    kr: 'وەک گروپێکی بچووک ئێمە ناتوانین بە خێرایی تایبەتمەندی تر زیاد بکەین، بەڵام بە یارمەتی ئێوە ئەتوانین بەرەوپێشچونەکە باشتر بکەین.'
                },
                {
                    en: `So we are asking for your help in two ways, one is by sending us your ideas for new feautrues and calculators,
                        second one is by helping us with the programming, we made the project open source to get more help from anyone who can code with JavaScript.
                        read more from Contribute page`,
                    kr: `بۆیە ئێمە داوای یارمەتی لە ئێوە ئەکەین بە دوو شێواز، یەکەمیان بە پێشانی بیرۆکەکانتان بۆ تایبەتمەندی و ژێمرەری نوێ،
                        دووەمیان بە یارمەتیدانمان لە پڕۆگراممین، ئێمە پڕۆژەکەمان کردووە بە 'Open-Source' بۆ هەرکەسێ بتوانێ یارمەتیمان بات لە کۆدی جاڤاسکریپت.
                        زیاتر بخوێنەرەوە لە پەیجی بەشداریکردن`
                },
                {
                    en: "Your help means so much for us and it's apreciated, even if you can't help us ith that we still apreciate how you use our website.",
                    kr: 'یارمەتی ئێوە زۆر بەمانایە لامان و زۆر بەرزی ئەنرخێنین، تەنانەت ئەگەر یارمەتیشمان نەدەیت ئێمە هەر سوپاسگوزارین بۆ بەکارهێنانی وێبسایتەکەمان'
                },
            ]
        },
    ],
    developersSection: {
        title: {
            en: 'Developers',
            kr: 'پەرەپێدەران'
        },
        developers: [
            {
                name: {
                    en: 'Rawand Faraidun',
                    kr: 'ڕەوەند فەرەیدون'
                },
                work: {
                    en: 'Web Developer',
                    kr: 'پەرەپێدەری وێب'
                },
                links: [
                    { url: 'https://www.fb.com/rawand.faraidun', icon: <FontAwesomeIcon icon={faFacebook} /> },
                    { url: 'https://github.com/rawand-faraidun', icon: <FontAwesomeIcon icon={faGithub} /> },
                    { url: 'https://www.instagram.com/rawand.faraidun/', icon: <FontAwesomeIcon icon={faInstagram} /> },
                ],
                image: RawandFaraidunImage
            },
            {
                name: {
                    en: 'Mhamad Rzgar',
                    kr: 'محەمەد ڕزگار'
                },
                work: {
                    en: 'Programmer',
                    kr: 'پڕۆگرامەر'
                },
                links: [
                    { url: 'https://www.facebook.com/mhamadplay4', icon: <FontAwesomeIcon icon={faFacebook} /> },
                    { url: 'https://www.instagram.com/mhamad_rzgar4/', icon: <FontAwesomeIcon icon={faInstagram} /> },
                ],
                image: MhamadRzgarImage
            },
            {
                name: {
                    en: 'Shazyar Taha',
                    kr: 'شازیار تەها'
                },
                work: {
                    en: 'Programmer',
                    kr: 'پڕۆگرامەر'
                },
                links: [
                    { url: 'https://www.facebook.com/shazyar.taha', icon: <FontAwesomeIcon icon={faFacebook} /> },
                    { url: 'https://www.instagram.com/shazyar_taha_/', icon: <FontAwesomeIcon icon={faInstagram} /> },
                ],
                image: ShazyarTahaImage
            },
            {
                name: {
                    en: 'Mhamad Hassan',
                    kr: 'محەمەد حەسەن'
                },
                work: {
                    en: 'Programmer',
                    kr: 'پڕۆگرامەر'
                },
                links: [
                    { url: 'https://www.facebook.com/mhamad.h.kareem', icon: <FontAwesomeIcon icon={faFacebook} /> },
                ],
                image: MhamadHassanImage
            }
        ]
    }
}


// providing the content
export default function getAboutContent() {
    return aboutContent;
}
export { getAboutContent }