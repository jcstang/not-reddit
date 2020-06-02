import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navigation() {
  return (
    <div>
      <div className="placeholder">
        <Link to="/home">
          <img
            src="https://i.imgur.com/iZShFMQ.png"
            alt="background"
            className="logowithoutE"
            href="/home"
          />
        </Link>
        <img
          src="https://i.imgur.com/rXhA7FC.png"
          alt="background"
          className="logoshadow"
        />
        <img
          src="https://i.imgur.com/g9FX4yY.png"
          alt="background"
          className="logoBackground"
        />
        <div className="outsidediv">
          <div className="movingGradient"></div>
          <div className="movingGradient2"></div>
          <div className="movingGradient3"></div>
        </div>
        <div className="outsidediv2">
          <div className="movingGradient"></div>
          <div className="movingGradient2"></div>
          <div className="movingGradient3"></div>
        </div>
        <div className="whitebar"></div>
        <div className="greybar"></div>
        <div className="whitegradient"></div>
        <div className="hidenavbar"></div>
      </div>
      <Navbar bg="light" expand="xxlg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home" className="margintrick">
              Home
            </Nav.Link>
            <Nav.Link href="/create-post">Create a Post</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/sign-up">Sign-up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
