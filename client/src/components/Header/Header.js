import React, { useState } from "react";
import logo from "../../logo.png";
import './Header.css';

export default function Header(props) {

  const [titleState, setTitleState ] = useState('');

  return (
    <div className="Header-header container-fluid">
      <img src={logo} className="Header-logo" alt="logo" />
      <h2>{props.title}</h2>
    </div>

  )
}
