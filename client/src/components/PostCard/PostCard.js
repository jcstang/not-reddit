import React from "react";
import './PostCard.css';

export default function PostCard(props) {
  const body = props.post.body;
  const community = props.post.onCommunity.name;
  const postedBy = props.post.postedBy.displayName;
  const title = props.post.title;
  console.log(props);

  return (
    <div className="card card-fluid">
      <h1 className="card-header">{title}</h1>
      <div className="card-body">
        <p>{body}</p>
        <p>{community}</p>
        <p>{postedBy}</p>
      </div>
    </div>
  );
}
