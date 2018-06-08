/* eslint react/no-did-mount-set-state: 0 */
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Toggle } from './Utils';

const App = () => (
  <Router>
    <div className="Appp">
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            {on && <h1>Show Me</h1>}
            <button onClick={toggle}>Show/Hide</button>
          </Fragment>
        )}
      </Toggle>
    </div>
  </Router>
);

export default App;
