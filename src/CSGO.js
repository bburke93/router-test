import React from 'react'
import vpLogo from './imgs/vp.jpg'
import astralisLogo from './imgs/astralis.png'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Virtus Pro</h2>
        <img src={vpLogo} alt="logo" width="400"/>
        <h2>Astralis</h2>
        <img src={astralisLogo} alt="logo" width="400"/>
      </div>
    )
  }
})
