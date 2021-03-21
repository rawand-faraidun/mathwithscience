import React, { useEffect } from 'react';
import { BrowserRouter as Router /*,  Switch */ } from 'react-router-dom';

// importing components
import Header from './components/partials/Header/Header';
import Home from './components/Home/Home';


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
    <Router>

      {/* Adding header of the page */}
      <Header />


      {/* Adding Home */}
      <Home />


      {/* this is a test element to make the page scroolable */}
      <div className="test" id="test" style={{ position: 'absolute', top: 2000, backgroundColor: 'red', width: '100%' }}>
        aajv
                <br />
                jhsd
                <br />
                isvaa
            </div>

    </Router>
  );
}

export default App;
