import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import languageHelper from './components/partials/helpers/Language'
import ScrollToTop from './components/partials/helpers/ScrollToTop'
import GoogleAnalytics from './components/partials/helpers/GoogleAnalytics'
// partial component
import Header from './components/partials/Header/Header'
import Footer from './components/partials/Footer/Footer'
// pages component
import Home from './components/pages/Home/Home'
import CollectionsRoutes from './components/pages/Collections/Collections'
import CalculatorsRoutes from './components/pages/Calculators/Calculators'
import Search from './components/pages/Search/Search'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import PrivacyPolicy from './components/pages/Privacy-Policy/Privacy-Policy'
import NotFound404 from './components/pages/others/Not-Found-404/Not-Found-404'

// importing partial designs
import './components/partials/designs/partials.css'



// initiating language helper cookie check constructor
new languageHelper()



/**
 *  @return {Element} : app frontend
 */
export default function App() {

    // removing the preload class from the body when the page is ready
    // preload class prevent anything to animate before the whole page is ready
    useEffect(() => {
        document.getElementsByTagName('body')[0].removeAttribute('class')
    }, [])


    return (
        <>
            <Router>

                {/* google analytics */}
                <GoogleAnalytics />

                {/* scrolling to top of page when the route url changes */}
                <ScrollToTop />


                {/* Adding header of the page */}
                <Header />


                {/* routes switch */}
                <Routes>

                    {/* 404 route, it shows current pathname not match any route */}
                    <Route path="*"
                        element={<NotFound404 invailedUrl={'this-path'} customButton={{ name: 'Calculators', url: '/calculators' }} />}
                    />


                    {/* Home route */}
                    <Route path="/" element={<Home />} />


                    {/* Collections route */}
                    <Route path="/collections" element={<CollectionsRoutes />} />
                    <Route path="/collections/:collectionUrlName" element={<CollectionsRoutes />} />
                    <Route path="/collections/:collectionUrlName/:calculatorUrlName" element={<CollectionsRoutes />} />


                    {/* Calculators route */}
                    <Route path="/calculators" element={<CalculatorsRoutes />} />
                    <Route path="/calculators/:calculatorUrlName" element={<CalculatorsRoutes />} />


                    {/* search route */}
                    <Route path="/search" element={<Navigate to="/" replace />} />
                    <Route path="/search/:searchText" element={<Search />} />


                    {/* about route */}
                    <Route path="/about" element={<About />} />
                    <Route path="/about-us" element={<About />} />


                    {/* contact route */}
                    <Route path="/contact" element={<Contact />} />


                    {/* privacy policy route */}
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                </Routes>


                {/* <div style={{ position: 'absolute', top: '2000px', height: '40px', width: '100%' }}>aaa</div> */}


                {/* adding footer of the page */}
                <Footer />

            </Router>
        </>
    )
}
