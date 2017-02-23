import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>My favorite teams by sport:</h2>
        <ul>
          <li><NavLink to="/teams/football">Football</NavLink></li>
          <li><NavLink to="/teams/hockey">Hockey</NavLink></li>
          <li><NavLink to="/teams/baseball">Baseball</NavLink></li>
          <li><NavLink to="/teams/csgo">eSports - Counter Strike: Global Offensive</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
