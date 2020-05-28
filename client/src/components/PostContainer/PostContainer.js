import React, { useState } from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import { CardDeck, Col, Row } from "react-bootstrap";
<<<<<<< HEAD
=======
import DetailsPage from "../../pages/DetailsPage";
import _ from 'lodash';

>>>>>>> a04f13eeb721364b100ef301edd26c1da27c9b9a
function PostContainer(props) {
  const Posts = props.posts;
  // let Posts2 = props.posts;

<<<<<<< HEAD
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
            <Col xs="12" sm="6" md="4" lg="2">
              <PostCard indexValue={index} post={post} getid={getid} />
=======
  const [selectedPost, setSelectedPost] = useState({});

  const postSelectedHandler = (post, index) => {
    // alert(`post with the id of ${post._id} has been clicked!`);
    console.log(index);
    console.log(selectedPost);
    // console.log(post);
    setSelectedPost(post);
  }

  const loadComponent = () => {
    if(!_.isEmpty(selectedPost)) {
      return <DetailsPage post={selectedPost} />
    }

    return (
      <div>
      <CardDeck className="m-1">
        <Row>
          {Posts.map((post, index) => (
            <Col xs="12" sm="6" md="4" lg="2" key={index}>
              <PostCard 
                key={index} 
                indexId={index} 
                post={post} 
                postSelectedHandler={postSelectedHandler} 
              />
>>>>>>> a04f13eeb721364b100ef301edd26c1da27c9b9a
            </Col>
          ))}
        </Row>
      </CardDeck>
<<<<<<< HEAD
      <PostViewer
        show={showMainViewer}
        posts={Posts}
        targetPost={TargetPost}
        close={closeViewer}
      />
    </div>
  );
=======
      <PostViewer show={false} posts={Posts} />
      </div>
    );
  }
  
  return loadComponent();
  // if(selectedPost.length <= 0) {
  //   return(
  //     <DetailsPage post={selectedPost} />
  //   );
  // } else {
  //   return (
  //     <div>
  //       <CardDeck className="m-1">
  //         <Row>
  //           {Posts.map((post, index) => (
  //             <Col xs="12" sm="6" md="4" lg="2" key={index}>
  //               <PostCard 
  //                 key={index} 
  //                 indexId={index} 
  //                 post={post} 
  //                 postSelectedHandler={postSelectedHandler} 
  //               />
  //             </Col>
  //           ))}
  //         </Row>
  //       </CardDeck>
  //       <PostViewer show={false} posts={Posts} />
  //     </div>
  //   );
  // }

>>>>>>> a04f13eeb721364b100ef301edd26c1da27c9b9a
}

export default PostContainer;
