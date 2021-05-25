import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing components
import languageHelper from './components/partials/languageHelper';

// partial components
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';

// pages components
import Home from './components/pages/Home/Home';
import CollectionsRoutes from './components/pages/Collections/Collections';
import CalculatorsRoutes from './components/pages/Calculators/Calculators';



// initiating language helper cookie check constructor
new languageHelper();


/**
 *  @return : Element, returns all the frontend
 */
function App() {

    // removing the preload class from the body when the page is ready
    // preload class prevent anything to animate before the whole page is ready
    useEffect(() => {
        document.getElementsByTagName('body')[0].removeAttribute('class');
    }, []);


    return (
        <>
            <Router>

                {/* Adding header of the page */}
                <Header />


                {/* routes switch */}
                <Switch>

                    {/* Home route */}
                    <Route path="/" exact >
                        <Home />
                    </Route>


                    {/* Collections route */}
                    <Route
                        path=
                        {[
                            "/collections",
                            "/collections/:collectionUrlName",
                            "/collections/:collectionUrlName/:calculatorUrlName"
                        ]}
                        exact
                    >
                        <CollectionsRoutes />
                    </Route>


                    {/* Collections route */}
                    <Route
                        path=
                        {[
                            "/calculators",
                            "/calculators/:calculatorUrlName"
                        ]}
                        exact
                    >
                        <CalculatorsRoutes />
                    </Route>

                </Switch>


                {/* <div style={{ position: 'absolute', top: '2000px', height: '40px', width: '100%' }}>aaa</div> */}


                {/* adding footer of the page */}
                <Footer />


            </Router>
        </>
    );
}

export default App;
