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
          {/* <FormGroup controlId = "username" */}
          <input type = "text" name = "username" onChange = {this.handleChange} placeholder = "username"/>
          <input type = "text" name = "email" onChange = {this.handleChange} placeholder = "email"/>
          <input type = "text" name = "password" onChange = {this.handleChange} placeholder = "password"/>
          
          <button>SignUp</button>
        </form>
      </div>
    );
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
