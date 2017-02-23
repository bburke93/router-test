import React from 'react'
import logo from './imgs/redsox.png'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Boston Red Sox</h2>
        <img src={logo} alt="logo" width="400"/>
      </div>
    )
  }
})
