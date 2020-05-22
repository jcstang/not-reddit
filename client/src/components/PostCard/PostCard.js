import React from "react";
import './PostCard.css';

export default function PostCard(props) {
  const body = props.post.body;
  const community = props.post.onCommunity.name;
  const postedBy = props.post.postedBy.displayName;
  const title = props.post.title;

  return (
    <div className="card card-fluid mt-1">
      <h1 className="card-header">Title: {title}</h1>
      <div className="card-body">
        <p>{body}</p>
          <p className="float-left mr-2">Community: {community} </p>
          <p className="float-left">Post Created by: {postedBy}</p>
      </div>
    </div>
  );
}
