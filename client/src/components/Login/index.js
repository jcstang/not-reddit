import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Redirect } from "react-router-dom";

<<<<<<< HEAD
export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [toHome, setToHome] = useState(false);
=======
export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errorMessage: "",
    redirect: false,
    needSignup: false
  };
>>>>>>> 3303e8a866f799d8aa61962d68d8c36d41f0bf0d

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    axios({
      url: "api/log-in",
      method: "POST",
      data: {
        username,
        password,
      },

<<<<<<< HEAD
    let userguy = {
      username: email,
      email: email,
      password: password,
      joinDate: "2020-05-26T03:23:49.058Z",
      imageUrl: "https://source.unsplash.com/6anudmpILw4/200x200",
    };
    props.dispatch({ type: "changeuserdata", placeHolderUser: userguy });
    setTimeout(() => setToHome(true), 2000);
  }

  return (
    <div className="Login container">
      {toHome ? <Redirect to="/" /> : null}
      <form onSubmit={handleSubmit}>
        {/* <FormGroup controlId="username" bsSize="large">
          <label>Username</label>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup> */}
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
=======
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
        // console.log("Data: ", response.data);
        this.setState({ redirect: true });
      })
      .catch((error) => {
        // console.log("Error: ", error.response);
        this.setState({
          errorMessage: "Failed to login. Please sign up or try again.",
        });
        setTimeout(() => {
          this.setState({ needSignup: true })
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
      return <Redirect to="/" />;
    }
    if (this.state.needSignup) {
      return <Redirect to="/sign-up"/>;
    }
    return (
      <div className="Login Container container">
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
              type="text"
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
>>>>>>> 3303e8a866f799d8aa61962d68d8c36d41f0bf0d
}
