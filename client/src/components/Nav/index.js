import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="/">Seenit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create-post">Create a Post</Nav.Link>
          <Nav.Link href="/log-in">Login</Nav.Link>
          <Nav.Link href="/sign-up">Sign-up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
