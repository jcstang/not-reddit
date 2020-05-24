import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import "./index.css";

export default function UserSettings() {
  const [show, setShow] = useState(true);
  const alertCaller = () => {

    if(show) {
      return (
        <Alert
          variant="danger"
          onClose={() => setShow(false)} dismissible
        >
          <Alert.Heading>Oh Snap! you got an Error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
              Cras mattis consectetur purus sit amet fermentum.
            </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>
  }

  return (
    <div className="user-page container-fluid">
      {alertCaller()}
      <div className="container">
        <h1>User Settings</h1>
        <p>UserName: </p>
        <h2>Some Title</h2>
        <h2>Some Title</h2>
        <h3>Some other title</h3>
      </div>
    </div>
  );
}