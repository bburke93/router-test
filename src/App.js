import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Router </h2>
        </div>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/teams">Sports Teams</NavLink></li>
        </ul>
      {this.props.children}
      </div>
    )
  }
})
