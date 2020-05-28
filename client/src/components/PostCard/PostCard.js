import React from "react";
import "./PostCard.css";
import Card from "react-bootstrap/Card";

export default function PostCard(props) {
  const img = props.post.imageUrl;
  const likes = props.post.numberOfLikes;
  // const getid = props.getid;

  return (
<<<<<<< HEAD
    <Card className="mb-2">
      <Card.Img
        variant="top"
        src={img}
        name={props.indexValue}
        onClick={props.getid}
      />
=======
    <Card className="mb-2" onClick={() => props.postSelectedHandler(props.post, props.indexId)} >
      <Card.Img variant="top" src={img} />
>>>>>>> a04f13eeb721364b100ef301edd26c1da27c9b9a
      <Card.Footer as="small" variant="text-muted">
        Likes: {likes}
      </Card.Footer>
    </Card>
  );
}
