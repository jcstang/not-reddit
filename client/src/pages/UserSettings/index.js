// ***************************************************************************
// User Settings -  Page
// ***************************************************************************
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./index.css";
import UserSettingContainer from "../../containers/UserSettingContainer";

export default function UserSettings(props) {
  const [show, setShow] = useState(true);

  const alertCaller = (event) => {
    // event.preventDefault();

    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh Snap! you got an Error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  };

  return (
    <div className="user-page container-fluid">
      {alertCaller()}
      <h1>Some title for some settings page</h1>
      <UserSettingContainer user={props.user} />
    </div>
  );
}
