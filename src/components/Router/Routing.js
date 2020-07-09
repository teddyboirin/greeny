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
const SignUp = lazy(() => import('../FormUser/SignUp/SignUp'));
const TestCarbone = lazy(() => import('../FormUser/TestCarbone/TestCarbone'));
const DefisCategory = lazy(() => import('../Defis/DefisCategory/DefisCategory'));
const DefiDescription = lazy(() => import('../global/DefiDescription/DefiDescription'));

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
              <Link to="/attente">En attente</Link>
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
            <Route path="/attente">
              <Favoris />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/defis/:categorie">
              <DefisCategory />
            </Route>
             <Route path="/item/:id">
              <DefiDescription />
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