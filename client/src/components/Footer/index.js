import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer>
      <Jumbotron>
        <p className="pull-right">
          <i className="fab fa-github" /> Brought to you by: Jacob Stanger, Brian Allen, Graham Thomas, and Miranda D'Asto using react.
        </p>

      </Jumbotron>
      {/* <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Brought to you by: Jacob Stanger, Brian Allen, Graham Thomas, and Miranda D'Asto using react.
      </p> */}
    </footer>
  );
}

export default Footer;