import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl, Breadcrumb } from "react-bootstrap";
import Header from "../Header/Header";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: "",
    redirect: false,
    needSignup: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    // Store data
    let username1 = username;
    localStorage.setItem("username1", username1);

    axios({
      url: "api/log-in",
      method: "POST",
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        this.setState({ redirect: true });
      })
      .catch((error) => {
        this.setState({
          errorMessage: "Failed to login. Please sign up or try again.",
        });
        setTimeout(() => {
          this.setState({ needSignup: true });
        }, 7000);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    if (this.state.needSignup) {
      return <Redirect to="/sign-up" />;
    }
    return (
      <div>
        <Header />
        <div className="container rounded bg-light mt-2 pb-2">
          <h1 className="font-weight-bold">Log in Below!</h1>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bssize="large">
              <label>Username</label>
              <FormControl
                className="border border-dark"
                autoFocus
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup controlId="password" bssize="large">
              <label>Password</label>
              <FormControl
                className="border border-dark"
                autoFocus
                type="password"
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Button block size="large" type="submit">
                {" "}
                Log in{" "}
              </Button>
            </FormGroup>

            <Breadcrumb>
              <Breadcrumb.Item href="/sign-up">Sign Up</Breadcrumb.Item>
            </Breadcrumb>
          </form>

          <p>{this.state.errorMessage}</p>
        </div>
      </div>
    );
  }
}
