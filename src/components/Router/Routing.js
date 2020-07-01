import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './routing.scss'

const Defis = lazy(() => import('../Defis/Defis'));
const Assoc = lazy(() => import('../Assoc/Assoc'));
const Favoris = lazy(() => import('../Favoris/Favoris'));
const Account = lazy(() => import('../Account/Account'));
const SignUp = lazy(() => import('../SignUp/SignUp'));
const TestCarbone = lazy(() => import('../SignUp/TestCarbone'));

function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/defis">Défis</Link>
            </li>
            <li>
              <Link to="/assoc">Associations</Link>
            </li>
            <li>
              <Link to="/favoris">Favoris</Link>
            </li>
            <li>
              <Link to="/account">Compte</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Suspense fallback={<div>Chargement...</div>}>
          <Switch>
            <Route path="/test">
              <TestCarbone />
            </Route>
            <Route path="/assoc">
              <Assoc />
            </Route>
            <Route path="/favoris">
              <Favoris />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/defis">
              <Defis />
            </Route>
            <Route path="/">
              <SignUp />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
    
export default Routing;