import React from "react";
import logo from "../../logo.png";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header-header container-fluid mb-2">
      <img src={logo} className="Header-logo" alt="logo" />
      <h2>Seenit</h2>
    </div>
  );
}
