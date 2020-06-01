import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function DetailsPage(props) {
  const [cardList, setCardList] = useState([
    "This is a comment which is cool! 1",
    "This is a comment which is cool! 2",
    "This is a comment which is cool! 3",
    "This is a comment which is cool! 4",
    "This is a comment which is cool! 5",
    "This is a comment which is cool! 6",
  ]);
  //const [ showDetails, setShowDetails ] = useState(true);

  // const loadCardList = () => {
  //     const myArray = ['comment 1'];
  //     // for (let i = 0; i < 7; i++) {
  //     //     myArray.push(`This is a comment which is cool! ${i}`);
  //     // }
  //     setCardList(myArray);
  //     console.log(cardList);
  // }

  // loadCardList();
  // let index = 7;
  const addToArray = () => {
    const arrayThing = [
      ...cardList,
      "This is a comment which is cool! " + (cardList.length + 1),
    ];
    setCardList(arrayThing);
    // index++;
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Details Page</h1>
          <Jumbotron>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <p>
              <Button variant="primary">Go to a link??</Button>
            </p>
            <p>
              <Button variant="warning" onClick={() => addToArray()}>
                Add a comment
              </Button>
            </p>
            <p>
              <Button variant="info" onClick={() => <Link to="/" />}>
                Go Back
              </Button>
            </p>
          </Jumbotron>
        </Col>

        <Col md={4}>
          <h1>2 of 2</h1>
          <Container>
            {cardList.map((card, index) => (
              <Card key={index}>
                <Card.Body>{card}</Card.Body>
              </Card>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
