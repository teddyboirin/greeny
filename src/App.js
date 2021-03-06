import React from 'react';
import './App.scss';

import Routing from './components/Router/Routing';
import SignUp from './components/FormUser/SignUp/SignUp';

import dotsUp from './assets/dots_up.png'
import dotsDown from './assets/dots_down.png'
import TestCarbone from './components/FormUser/TestCarbone/TestCarbone';

import OnBoarding from './components/OnBoarding/OnBoarding';



function App(props) {
  return (
    <div className="App">
      <div className="logo_mobile_bloc">
        <img className='logo_mobile' src={require('./assets/logo_g.svg')} alt="logo"/>
      </div>

        <a href="/defis">
            <img src={require('./assets/logo-green.svg')} alt="logo" className="logo-app"/>
        </a>

      {window.location.pathname === '/signup' ?
        <SignUp />
      
        : window.location.pathname === '/test' ?
          <TestCarbone />
        : window.location.pathname === '/' ?
                  <OnBoarding />
        :
        <div>
          <img className="dots_up" src={dotsUp} alt="dots_up"/>
          <Routing />
          <img className="dots_down" src={dotsDown} alt="dots_down"/>
        </div>
      }
    </div>
  );
}

export default App;
