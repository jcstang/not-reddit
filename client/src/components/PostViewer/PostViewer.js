import React, { Component } from "react";
import "./PostViewer.css";
import Favorites from "../components/Favorites/index.js";
import htmlToImage from "html-to-image";

class PostViewer extends Component {
  state = {
    imgs: [],
  };

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
  getimage = () => {
    var htmlToImage = require("html-to-image");
    var node = document.getElementById("mymodal");
    let stateimages = this.state.img;

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        stateimages.push(img.src);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
    this.setState({ imgs: stateimages });
  };

  render() {
    let ShowComponent = ["modal", "toggler"];
    if (this.props.show === true) {
      ShowComponent.push("active");
    }

    return (
      <div>
        <Favorites imgages={this.state.imgs} />
        <div className={ShowComponent.join(" ")} id="myModal">
          <div className="modal-content" id="mymodal">
            <div>
              <span onClick={this.props.close} className="close">
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
              <p>
                Written by: {" " + this.getPost(this.props.targetPost).postedBy}
              </p>
              <div
                className="mainViewerP"
                dangerouslySetInnerHTML={{
                  __html: this.getPost(this.props.targetPost).body,
                }}
              ></div>
              <button onClick={this.getimage}>getimg</button>
              {/* <button onClick={this.props.close}>close</button> */}
            </div>
          </div>
          {/* <div>{this.getPost(4).toString()}</div> */}
        </div>
      </div>
    );
  }
}

export default PostViewer;
