import React, { Component } from "react";
import "./PostViewer.css";

class PostViewer extends Component {
  render() {
    let ShowComponent = ["toggle-form"];
    if (this.props.show) {
      ShowComponent.push("active");
    }

    return <div className={ShowComponent.join(" ")}>hello</div>;
  }
}

export default PostViewer;
