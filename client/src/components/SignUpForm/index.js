import React, { Component } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, Breadcrumb } from "react-bootstrap";
import Header from "../Header/Header";

export default class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    errorMessage: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    axios({
      url: "api/sign-up",
      method: "POST",
      data: {
        username,
        email,
        password,
      },
    })
      .then((response) => {
        // console.log("Data: ", response.data);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message,
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container rounded bg-light mt-2 pb-2">
          <h1 className="font-weight-bold">Sign Up Below!</h1>
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

            <FormGroup controlId="email" bssize="large">
              <label>Email</label>
              <FormControl
                className="border border-dark"
                autoFocus
                type="text"
                name="email"
                placeholder="email"
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
              <Button block bssize="large" type="submit">
                {" "}
                Sign Up{" "}
              </Button>
            </FormGroup>

            <Breadcrumb>
              <Breadcrumb.Item href="/">Login</Breadcrumb.Item>
            </Breadcrumb>
          </form>
          <p>{this.state.errorMessage}</p>
        </div>
      </div>
    );
  }
}
