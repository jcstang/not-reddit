import React, { useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import Viewminimized from "../Viewminimized";
import { CardGroup, Col, Row } from "react-bootstrap";
import "./PostContainer.css";

function PostContainer(props) {
  const Posts = props.posts;
  const [TargetPost, setTargetPost] = useState([]);
  const [showMainViewer, setShowMainViewer] = useState([false]);
  const [showViewminimized, setViewminimized] = useState([false]);
  const [selectedPosts, setSelectedPost] = useState([]);

  const getid = (event) => {
    let postname = event.target.name;
    let postnumber = parseInt(postname);
    setTargetPost(postnumber);
    setShowMainViewer(true);
  };
  const closeViewer = (event) => {
    setShowMainViewer(false);
  };
  const updateSelectedPost = (postidentifier) => {
    // console.log("your in");
    closeViewer();
    setViewminimized(true);
    let newPost = Posts[postidentifier];
    newPost.indexValue = TargetPost;
    setTimeout(() => {
      setSelectedPost([newPost, ...selectedPosts]);
    }, 750);

    setTimeout(() => {
      setTimeout(setViewminimized(false));
    }, 2000);
  };
  const deletefromfavs = (indexValuefromclick) => {
    const selectedPostsarray = selectedPosts;
    const newselectpostsarray = [];
    selectedPostsarray.forEach((element) => {
      if (element.indexValue === indexValuefromclick) {
      } else {
        newselectpostsarray.push(element);
      }
    });
    setSelectedPost(newselectpostsarray);
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
        updateSelectedPost={updateSelectedPost}
        close={closeViewer}
      />
      <Viewminimized
        selectedPosts={selectedPosts}
        show={showViewminimized}
        getid={getid}
        deletefromfavs={deletefromfavs}
      />
    </div>
  );
}

export default PostContainer;
