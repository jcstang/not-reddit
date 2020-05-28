import React, { Component } from "react";
import "./PostViewer.css";

class PostViewer extends Component {
  getPost(index) {
    if (this.props.show === true) {
      if (this.props.posts.length > 0) {
        return this.props.posts[index];
      } else {
        return {};
      }
    } else {
      return {};
    }
  }
  render() {
    let ShowComponent = ["toggler"];
    if (this.props.show === true) {
      ShowComponent.push("active");
    }

    return (
      <div className={ShowComponent.join(" ")}>
        {/* <div>{this.getPost(4).toString()}</div> */}
        <img
          src={this.getPost(this.props.targetPost).imageUrl}
          alt="imagefailedtoload"
          className="VisualizerPic"
        />
        <h1>{this.props.targetPost}</h1>
        <h6 className="VisualizerTitle">
          {this.getPost(this.props.targetPost).title}
        </h6>
        <div
          className="mainViewerP"
          dangerouslySetInnerHTML={{
            __html: this.getPost(this.props.targetPost).body,
          }}
        ></div>
        <button onClick={this.props.close}>close</button>
      </div>
    );
  }
}

export default PostViewer;
