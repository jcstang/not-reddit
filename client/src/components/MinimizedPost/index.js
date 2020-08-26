import React from "react";
import "./MinimizedPost.css";

function MinimizedPost(props) {
  return (
    <div className="bordercard shadow">
      <span
        className="close"
        onClick={() => props.deletefromfavs(props.indexValue)}
      >
        &times;
      </span>
      <img
        width="180"
        height="101"
        src={props.image}
        className="thumbnail"
        name={props.indexValue}
        onClick={props.getid}
        alt=""
      />
      <div className="slidetext">
        <p className="titleText">{props.title}</p>
      </div>
    </div>
  );
}

export default MinimizedPost;
