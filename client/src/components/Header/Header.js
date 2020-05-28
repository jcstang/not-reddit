import React, { useState } from "react";
import logo from "../../logo.png";
import './Header.css';

export default function Header(props) {

  // const [titleState, setTitleState ] = useState('');
  const [linkOpen, setLinkOpen] = useState(false);
  const [ navItems, setNavItems ] = useState([
    {
      text: "Home",
      className: "nav-link"
    },
    {
      text: "Thing",
      className: "nav-link"
    },
    {
      text: "Apple",
      className: "nav-link"
    }
  ]);

  const clickHandler = (event) => {
    // console.log(event.target);
    // setLinkOpen(!linkOpen);
    event.target.className = "nav-link active";
  }

  return (
    <div className="Header-header container-fluid mb-2">
      <img src={logo} className="Header-logo" alt="logo" />
      <h2>{props.title}</h2>
      {/* <ul className="nav nav-tabs">
        {
          navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className={item.className} href="#" onClick={clickHandler}>{item.text}</a>
            </li>
          ))
        }
      </ul> */}
    </div>

  )
}
