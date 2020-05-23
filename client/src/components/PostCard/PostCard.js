import React from "react";
import './PostCard.css';

export default function PostCard(props) {
  const img = props.post.img;
  console.log(img);
  return (
    <div className="card mt-1 text-center col-sm-8">
      <img src={img} className="card-img-top card-img " alt="..." />
      <div className="card-footer">
        <small className="text-muted">Likes: </small>
      </div>
    </div>
  );
}
