import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth,
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  setActiveNavItem = (path) => {
    return window.location.pathname === path
      ? "nav-link active"
      : "nav-link"
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          Seenit
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          {/* Navbar items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/")}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/search-posts")}
                to="/search-posts"
              >
                Search For A Post
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/create-post")}
                to="/create-post"
              >
                Create a Post
              </Link>
            </li>

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/log-in")}
                to="/log-in"
              >
                Log In
              </Link>
            </li>  

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/sign-up")}
                to="/sign-up"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
