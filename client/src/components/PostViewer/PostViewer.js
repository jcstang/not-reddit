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
      <div>
        <div className={ShowComponent.join(" ")} id="myModal">
          <div className="modal-content">
            <div id="mymodal15">
              <div>
                <div className="modalNavButtons">
                  <div className="floatLeft">
                    <span
                      onClick={() =>
                        this.props.updateSelectedPost(this.props.targetPost)
                      }
                      className="close floatLeft"
                    >
                      &minus;
                    </span>
                  </div>
                  <div className="floatRight">
                    <span onClick={this.props.close} className="close">
                      &times;
                    </span>
                  </div>
                </div>
                <img
                  src={this.getPost(this.props.targetPost).imageUrl}
                  alt="imagefailedtoload"
                  className="VisualizerPicModal"
                />

                <h1 className="VisualizerTitleModal">
                  {this.getPost(this.props.targetPost).title}
                </h1>

                <p>
                  Written by:{" "}
                  {" " + this.getPost(this.props.targetPost).postedBy}
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
          </div>
          {/* <div>{this.getPost(4).toString()}</div> */}
        </div>
      </div>
    );
  }
}

export default PostViewer;
