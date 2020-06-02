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
    return window.location.pathname === path ? "nav-link active" : "nav-link";
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <div>
        <img
          src="https://i.imgur.com/iZShFMQ.png"
          alt="background"
          className="logowithoutE"
        />
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
          <div cclassName="movingGradient3"></div>
        </div>
        <div className="outsidediv2">
          <div className="movingGradient"></div>
          <div className="movingGradient2"></div>
          <div className="movingGradient3"></div>
        </div>
        <div className="whitebar"></div>
        <div className="greybar"></div>
        <div className="whitegradient"></div>
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
          <ul className="navbar-nav">
            <li className="navItem">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/")}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/create-post")}
                to="/create-post"
              >
                Create a Post
              </Link>
            </li>

            <li className="navItem">
              <Link
                onClick={this.toggleNav}
                className={this.setActiveNavItem("/log-in")}
                to="/log-in"
              >
                Log In
              </Link>
            </li>

            <li className="navItem">
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
      </div>
    );
  }
}

export default Nav;
