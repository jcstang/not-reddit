import React, { Component } from "react";
import "./PostViewer.css";

class PostViewer extends Component {
  render() {
    let ShowComponent = ["toggler"];
    if (this.props.show) {
      ShowComponent.push("active");
    }

    return <div className={ShowComponent.join(" ")}></div>;
  }
}

export default PostViewer;
