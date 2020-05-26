import UserSettingItem from "../../components/UserSettingItem";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './index.css';




export default function UserSettingContainer(props) {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className="thing" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Your name may appear around GitHub where you contribute or are mentioned. You can remove it at any time.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control className="thing" type="password" placeholder="Password" />
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
          <p><strong>Profile Picture</strong></p>
          <div>
            <img src="https://source.unsplash.com/6anudmpILw4/200x200"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}