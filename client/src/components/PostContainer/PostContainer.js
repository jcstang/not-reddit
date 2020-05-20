import React from "react";

function PostContainer (props) {
    const Posts = props.posts;
    return (
        <div className="container-fluid">
            {Posts.map((post, index) => (
                <PostCard
                key={index}
                />
            ))}
        </div>
    );
}

export default PostContainer;