import React from 'react'
import logo from './imgs/pats.png'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>New England Patriots</h2>
        <img src={logo} alt="logo" width="400"/>
      </div>
    )
  }
})
