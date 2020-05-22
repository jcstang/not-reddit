import React from "react";

export default function PostCard(props) {
  const body = props.post.body;
  const community = props.post.onCommunity.name;
  const postedBy = props.post.postedBy.displayName;
  const title = props.post.title;

  return (
    <div className="card card-fluid">
      <h1 className="card-header">{title}</h1>
      <div className="card-body">
        <p>{body}</p>
        <div className="row">
          <p className="mr-2">Community: {community} </p>
          <p>Post Created by: {postedBy}</p>
        </div>
      </div>
    </div>
  );
}
