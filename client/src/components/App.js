import React, { useEffect } from 'react';
import { BrowserRouter as Router /*,  Switch */ } from 'react-router-dom';

// importing components
import Header from './partials/Header/Header';

function App() {

  // removing the preload class from the body when the page is ready
  // preload class prevent anything to animate before the whole page is ready
  useEffect(() => {
    document.getElementsByTagName('body')[0].removeAttribute('class');
  }, []);


  return (
    <Router>

      <Header />


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
