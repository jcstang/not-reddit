import React from "react";
import PostContainer from "../../components/PostContainer/PostContainer";
import Container from "react-bootstrap/Container";

export default function DisplayAllPosts(props) {
  const posts = props.posts;
  return (
    <Container fluid>
      <PostContainer posts={posts} />
    </Container>
  );
}
