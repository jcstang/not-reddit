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
    let ShowComponent = ["modal", "toggler"];
    if (this.props.show === true) {
      ShowComponent.push("active");
    }

    return (
      <div className={ShowComponent.join(" ")} id="myModal">
        <div class="modal-content">
          <div>
            <span onClick={this.props.close} class="close">
              &times;
            </span>
            <img
              src={this.getPost(this.props.targetPost).imageUrl}
              alt="imagefailedtoload"
              className="VisualizerPicModal"
            />
            <h1 className="VisualizerTitleModal">
              {this.getPost(this.props.targetPost).title}
            </h1>
            <p>Written by: Wikipedia</p>
            <div
              className="mainViewerP"
              dangerouslySetInnerHTML={{
                __html: this.getPost(this.props.targetPost).body,
              }}
            ></div>
            {/* <button onClick={this.props.close}>close</button> */}
          </div>
        </div>
        {/* <div>{this.getPost(4).toString()}</div> */}
      </div>
    );
  }
}

export default PostViewer;
