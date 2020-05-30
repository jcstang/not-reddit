import React, { Component } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: ""
  };

   handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    axios({
      url: "api/log-in",
      method: "POST",
      data: {
        username,
        password
      }

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
      console.log('Data: ', response.data)
      this.props.history.push('/');
    })
    .catch((error) => {
        // console.log("Error: ", error.response);
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
      <div className = "Login Container">
        <h2>Log in Below!</h2>
        <form onSubmit = {this.handleSubmit}>
         
          <FormGroup controlId = "username" bssize = "large">
            <label>Username</label>
            <FormControl autoFocus type = "text" name = "username" placeholder = "username" onChange = {this.handleChange} />
          </FormGroup>

          <FormGroup controlId = "password" bssize = "large">
            <label>Password</label>
            <FormControl autoFocus type = "text" name = "password" placeholder = "password" onChange = {this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Button block bssize = "large" type = "submit"> Log in </Button>
          </FormGroup>

        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}