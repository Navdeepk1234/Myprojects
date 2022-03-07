import React from 'react'
import image from "../images/logo.png";
function Header() {
  return (
    <div className="header">
        <div className="wrapper">
        <img src={image} alt="logo"/>
        </div>
        </div>
  )
}

export default Header;