import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import './index.css';
import Home from './Home'
import Teams from './Teams'
import Football from './Football'
import Hockey from './Hockey'
import Baseball from './Baseball'
import csgo from './CSGO'

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/teams" component={Teams}>
          <Route path="/teams/football" component={Football}/>
          <Route path="/teams/hockey" component={Hockey}/>
          <Route path="/teams/baseball" component={Baseball}/>
          <Route path="/teams/csgo" component={csgo}/>
        </Route>
      </Route>
    </Router>
), document.getElementById('root'));
