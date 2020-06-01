import React, { useState, useEffect } from "react";
// import UserSettingItem from "../../components/UserSettingItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";

// const userSettingsReducer = (state, action) => {
//   if (action.type === 'bear') {
//     return {
//       ...state,
//       username: action.username
//     }
//   }

//   return state;
// }

export default function UserSettingContainer(props) {
  // const placeholderImg = "https://source.unsplash.com/6anudmpILw4/200x200";

  // const [ userSettingState, userSettingDispatch ] = useReducer(userSettingsReducer, {
  //   username: "JimHalpert23",
  //   email: "jim@dundermifflin.com",
  //   displayName: "Jim Halpert"
  // });

  // * start
  const [userNameState, setUserNameState] = useState("");
  const [userEmailState, setUserEmailState] = useState("");
  const [userDisplayNameState, setUserDisplayNameState] = useState("");

  // useEffect(() => {
  //   // userSettingDispatch({type: 'bear', username: props.user.username});
  //   setUserNameState(props.user.username || "JimHalpert23");
  //   setUserEmailState(props.user.email || "jim@dundermifflin.com");
  //   setUserDisplayNameState(props.user.displayName || "Jim Halpert");

  // },[userNameState]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // TODO: stuff
  };

  // const onChangeHandler = (event) => {
  //   console.log(event);
  // }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="thing"
                type="text"
                placeholder="Joe Dirt"
                value={userNameState}
                onChange={(event) => setUserNameState(event.target.value)}
              />
              <Form.Text className="text-muted">
                Your name may appear around GitHub where you contribute or are
                mentioned. You can remove it at any time.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="thing"
                type="email"
                placeholder="Enter email"
                value={userEmailState}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDisplayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                className="thing"
                type="text"
                placeholder="Display Name"
                value={userDisplayNameState}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => props.AlertFunction()}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <p>
            <strong>Profile Picture</strong>
          </p>
          <div>
            <img src={props.user.imageUrl} alt="..."></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
