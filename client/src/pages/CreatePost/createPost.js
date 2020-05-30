import React from "react";
import Form from "../../components/Form/form";

function CreatePost(props) {
  return (
    <div className="container">
      <Form refreshHomePage={props.refreshHomePage} username={username} />
    </div>
  );
}

export default CreatePost;
