import React from "react";
import './PostCard.css';

export default function PostCard(props) {
  const img = props.image;
  return (
    <div className="card mt-1 text-center col-sm-8 col-md-5 col-lg-3">
      <img src={img} className="card-img-top card-img" alt="..." />
      <div className="card-footer">
        <small className="text-muted">Likes: </small>
      </div>
    </div>
  );
}
