import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Defis from '../Defis/Defis';
import Assoc from '../Assoc/Assoc';
import Favoris from '../Favoris/Favoris';
import Account from '../Account/Account';

function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Défis</Link>
            </li>
            <li>
              <Link to="/assoc">Associations</Link>
            </li>
            <li>
              <Link to="/favoris">Mes Habitudes</Link>
            </li>
            <li>
              <Link to="/account">Compte</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/assoc">
            <Assoc />
          </Route>
          <Route path="/favoris">
            <Favoris />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/">
            <Defis />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
    
export default Routing;