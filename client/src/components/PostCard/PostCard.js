import React from "react";
import "./PostCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TiThumbsUp } from "react-icons/ti";

export default function PostCard(props) {
  const img = props.post.imageUrl;
  const likes = props.post.numberOfLikes;
  


  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        name={props.indexValue}
        onClick={props.getid}
        className="card-post"
      />
      <Card.Footer as="small" variant="text-muted">
        Likes: {likes}  <Button className="float-right" size="sm" variant="outline-dark"><TiThumbsUp/></Button>
      </Card.Footer>
    </Card>
  );
}
