import React from 'react'
import logo from './imgs/bruins.svg'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Boston Bruins</h2>
        <img src={logo} alt="logo"/>
      </div>
    )
  }
})
