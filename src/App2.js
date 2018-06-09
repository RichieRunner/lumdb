/* eslint react/no-did-mount-set-state: 0 */
import React, { Component, Fragment, createContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Toggle } from './Utils';
import User from './User';
import { UserContext } from './UserContext';


class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Carlos',
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const App = () => (
  <Router>
    <UserProvider>
      <div className="Appp">
        <User />
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </Fragment>
          )}
        </Toggle>
      </div>
    </UserProvider>
  </Router>
);

export default App;
