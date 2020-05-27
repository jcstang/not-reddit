import React, { Component } from "react";
import "./PostViewer.css";

class PostViewer extends Component {
  getPost(index) {
    if (this.props.posts.length > 0) {
      return this.props.posts[index];
    } else {
      return {};
    }
  }
  render() {
    let ShowComponent = ["toggler"];
    if (this.props.show) {
      ShowComponent.push("active");
    }

    return (
      <div className={ShowComponent.join(" ")}>
        {/* <div>{this.getPost(4).toString()}</div> */}
        <img
          src={this.getPost(4).imageUrl}
          alt="imagefailedtoload"
          className="VisualizerPic"
        />
        <h6 className="VisualizerTitle">{this.getPost(4).title}</h6>
        <div
          className="VisualizerP"
          dangerouslySetInnerHTML={{
            __html: this.getPost(4).body,
          }}
        ></div>
      </div>
    );
  }
}

export default PostViewer;
