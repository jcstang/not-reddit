import React, { Component } from 'react';
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    axios({
      url: "/signup",
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
      console.log('Error ', error.response);
    })
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
          <input type = "text" name = "username" onChange = {this.handleChange} placeholder = "username"/>
          <input type = "text" name = "email" onChange = {this.handleChange} placeholder = "email"/>
          <input type = "text" name = "password" onChange = {this.handleChange} placeholder = "password"/>
          
          <button>SignUp</button>
        </form>
      </div>
    );
  }
}