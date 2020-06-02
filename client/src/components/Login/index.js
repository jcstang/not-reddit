import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";

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
    var username1 = username;
    localStorage.setItem("username1", username1);

    // this.props.dispatch({
    //   type: "changeuserdata",
    //   placeHolderUser: userguy,
    // });
    axios({
      url: "api/log-in",
      method: "POST",
      data: {
        username,
        password,
      },

      // let userguy = {
      //   username: email,
      //   email: email,
      //   password: password,
      //   joinDate: "2020-05-26T03:23:49.058Z",
      //   imageUrl: "https://source.unsplash.com/6anudmpILw4/200x200",
      // };
      // this.props.dispatch({ type: "changeuserdata", placeHolderUser: userguy });
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
        }, 10000);
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
      <div className="container rounded bg-light mt-2">
        <h2>Log in Below!</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
            <label>Username</label>
            <FormControl
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
              Log in{" "}
            </Button>
          </FormGroup>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}
