import React from "react";
import PostContainer from "../../components/PostContainer/PostContainer";
import Container from "react-bootstrap/Container";
import "./displayAllPost.css";

export default function DisplayAllPosts(props) {
  const posts = props.posts;

  return (
    <div className="bordermainapp">
      <Container fluid>
        <PostContainer posts={posts} dispatch={props.dispatch} />
      </Container>
    </div>
  );
}
