import React from "react";
import "./PostCard.css";
import Card from "react-bootstrap/Card";

export default function PostCard(props) {
  const img = props.post.imageUrl;
  const likes = props.post.numberOfLikes;
  // const getid = props.getid;

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
        Likes: {likes}
      </Card.Footer>
    </Card>
  );
}
