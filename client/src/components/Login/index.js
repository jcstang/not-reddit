import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let userguy = {
      username: email,
      email: email,
      password: password,
      joinDate: "2020-05-26T03:23:49.058Z",
      imageUrl: "https://source.unsplash.com/6anudmpILw4/200x200",
    };
    props.dispatch({ type: "changeuserdata", placeHolderUser: userguy });
  }


  return (
    <div className="Login container">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bssize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bssize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}