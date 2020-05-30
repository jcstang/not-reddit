import React, { Component } from 'react';
import axios from "axios";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    errorMessage: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    axios({
      url: "api/users",
      method: "POST",
      data: {
        username,
        email,
        password
      }
    })
    .then((response) => {
      console.log('Data: ', response.data)
      this.props.history.push('/');
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.response.data.message
      });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    return(
      <div>
        <h2>Sign Up Below!</h2>
        <form onSubmit = {this.handleSubmit}>
          <FormGroup controlId = "username" bssize = "large">
            <FormControl autoFocus type = "text" name = "username" placeholder = "username" onChange = {this.handleChange} />
          </FormGroup>

          <FormGroup controlId = "email" bssize = "large">
            <FormControl autoFocus type = "text" name = "email" placeholder = "email" onChange = {this.handleChange} />
          </FormGroup>

          <FormGroup controlId = "password" bssize = "large">
            <FormControl autoFocus type = "text" name = "password" placeholder = "password" onChange = {this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Button block bssize = "large" type = "submit"> Sign Up </Button>
          </FormGroup>

        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}
