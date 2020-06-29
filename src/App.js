import React from 'react';
import './App.scss';

import Routing from './components/Router/Routing';
import SignUp from './components/SignUp/SignUp';

import dotsUp from './assets/dots_up.png'
import dotsDown from './assets/dots_down.png'

function App() {
  return (
    <div className="App">
      {window.location.pathname === '/' ? (
        <SignUp />
      ) : (
        <div>
          <img src={dotsUp} alt="dots_up"/>
          <Routing />
          <img className="dots_down" src={dotsDown} alt="dots_down"/>
        </div>
      )}
    </div>
  );
}

export default App;
