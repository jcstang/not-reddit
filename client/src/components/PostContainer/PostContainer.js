import React, { useState } from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";
import { CardDeck, Col, Row } from "react-bootstrap";
import DetailsPage from "../../pages/DetailsPage";
import _ from 'lodash';

function PostContainer(props) {
  const Posts = props.posts;
  // let Posts2 = props.posts;

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
            </Col>
          ))}
        </Row>
      </CardDeck>
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

}

export default PostContainer;
