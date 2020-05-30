import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';

function Footer() {
  return (
    <footer>
      <Jumbotron sticky="bottom">
        <p className="pull-right">
          <i className="fab fa-github" /> Brought to you by: Jacob Stanger, Brian Allen, Graham Thomas, and Miranda D'Asto using react.
        </p>
      </Jumbotron>
    </footer>
  );
}

export default Footer;