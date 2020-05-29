import React, { useState } from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import { CardDeck, Col, Row } from "react-bootstrap";

function PostContainer(props) {
  const Posts = props.posts;
  // let Posts2 = props.posts;

  const [TargetPost, setTargetPost] = useState([]);
  const [showMainViewer, setShowMainViewer] = useState([false]);

  const getid = (event) => {
    let postname = event.target.name;
    let postnumber = parseInt(postname);
    console.log(postnumber);
    setTargetPost(postnumber);
    setShowMainViewer(true);
    // this.setState({ onCommunity: event.target.value });
  };
  const closeViewer = (event) => {
    setShowMainViewer(false);
  };

  return (
    <div>
      <CardDeck className="m-1">
        <Row>
          {Posts.map((post, index) => (
            //we can fiddle with sizes here :)
            <Col xs="12" sm="6" md="4" lg="2" key={index}>
              <PostCard indexValue={index} post={post} getid={getid} />
            </Col>
          ))}
        </Row>
      </CardDeck>
      <PostViewer
        show={showMainViewer}
        posts={Posts}
        targetPost={TargetPost}
        close={closeViewer}
      />
    </div>
  );
}

export default PostContainer;
