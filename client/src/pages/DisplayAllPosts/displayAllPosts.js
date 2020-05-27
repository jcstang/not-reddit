import React from "react";
import PostContainer from "../../components/PostContainer/PostContainer";

export default function DisplayAllPosts(props) {
  const posts = props.posts;
  return (
    <div className="container-fluid">
      <PostContainer posts={posts} />
    </div>
  );
}
