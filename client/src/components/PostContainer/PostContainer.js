import React from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";

function PostContainer(props) {
  const Posts = props.posts;
  return (
    <div className="card-deck">
      {Posts.map((post, index) => (
        <PostCard key={index} post={post}/>
      ))}
      <PostViewer show={true} />
    </div>
  );
}

export default PostContainer;
