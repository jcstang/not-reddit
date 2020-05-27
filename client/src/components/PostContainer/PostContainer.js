import React from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import { CardDeck, Col, Row } from "react-bootstrap";

function PostContainer(props) {
  const Posts = props.posts;
  // let Posts2 = props.posts;

  const postSelectedHandler = (post) => {
    alert(`post with the id of ${post._id} has been clicked!`);
    
  }

  return (
    <div>
      <CardDeck className="m-1">
        <Row>
          {Posts.map((post, index) => (
            <Col xs="12" sm="6" md="4" lg="2" key={index}>
              <PostCard key={index} post={post} postSelectedHandler={postSelectedHandler} />
            </Col>
          ))}
        </Row>
      </CardDeck>
      <PostViewer show={false} posts={Posts} />
    </div>
  );
}

export default PostContainer;
