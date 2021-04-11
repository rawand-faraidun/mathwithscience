import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing components
import languageHelper from './components/partials/languageHelper';
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import Home from './components/Home/Home';



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

        <Switch>

          {/* Adding Home */}
          <Route path="/" component={Home} exact />


        </Switch>


        {/* adding footer of the page */}
        <Footer />





        {/* this is a test element to make the page scroolable */}
        {/* <div className="test" id="test" style={{ position: 'absolute', top: 5000, backgroundColor: 'red', width: '100%' }}>
          aajv
            </div> */}


      </Router>
    </>
  );
}

export default App;
