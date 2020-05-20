import React from "react";

export default function PostCard(props) {


    return (
        <div className="card card-fluid">
            <h1 className="card-header">{props.post.title}</h1>
            <img src="https://imgur.com/gZjp2um" className="float-left" alt="post"></img>
            <div className="card-body">
                <p>Content Lives here.</p>
            </div>
        </div>
    )
}