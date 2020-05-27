import React from "react";
import './PostCard.css';

export default function PostCard(props) {
  const img = props.post.imageUrl;
  return (
    <div className="card mt-1 col-sm-4">
      <img src={img} className="card-img-top card-img" alt="..." />
      <div className="card-footer">
        <small className="text-muted">Likes: </small>
      </div>
    </div>
  );
}
