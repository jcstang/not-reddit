import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import { CardGroup, Col, Row } from "react-bootstrap";
import "./PostContainer.css";

function PostContainer(props) {
  const Posts = props.posts;
  const [TargetPost, setTargetPost] = useState([]);
  const [showMainViewer, setShowMainViewer] = useState([false]);

  const getid = (event) => {
    let postname = event.target.name;
    let postnumber = parseInt(postname);
    setTargetPost(postnumber);
    setShowMainViewer(true);
  };
  const closeViewer = (event) => {
    setShowMainViewer(false);
  };

  return (
    <div className="cardstackbackground shadow rounded">
      <CardGroup>
        <Row>
          {Posts.map((post, index) => (
            //we can fiddle with sizes here :)
            <Col xs="12" sm="6" md="4" lg="3" xl="2" key={index}>
              <PostCard
                indexValue={index}
                post={post}
                getid={getid}
                dispatch={props.dispatch}
              />
            </Col>
          ))}
        </Row>
      </CardGroup>
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
