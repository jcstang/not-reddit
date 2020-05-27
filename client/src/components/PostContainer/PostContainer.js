import React from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import CardDeck from "react-bootstrap/CardDeck";

function PostContainer(props) {
  const Posts = props.posts;
  return (
      <CardDeck>
        {Posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
        <PostViewer show={false} />
      </CardDeck>
  );
}

export default PostContainer;
