import React from "react";
import "./PostCard.css";
import Card from "react-bootstrap/Card";

export default function PostCard(props) {
  const img = props.post.imageUrl;
  const likes = props.post.numberOfLikes;
  return (
    <Card className="mb-2">
      <Card.Img variant="top" src={img} />
      <Card.Footer as="small" variant="text-muted">
        Likes: {likes}
      </Card.Footer>
    </Card>
  );
}
