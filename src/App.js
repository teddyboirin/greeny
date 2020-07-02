import React from 'react';
import './App.scss';

import Routing from './components/Router/Routing';
import SignUp from './components/FormUser/SignUp/SignUp';

import dotsUp from './assets/dots_up.png'
import dotsDown from './assets/dots_down.png'
import TestCarbone from './components/FormUser/TestCarbone/TestCarbone';

function App() {
  return (
    <div className="App">
      {window.location.pathname === '/' ?  
        <SignUp /> 
      
        : window.location.pathname === '/test' ? 
          <TestCarbone /> 
        : 
        <div>
          <img src={dotsUp} alt="dots_up"/>
          <Routing />
          <img className="dots_down" src={dotsDown} alt="dots_down"/>
        </div>
      }
    </div>
  );
}

export default App;
