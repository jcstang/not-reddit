import React, { Component } from "react";
import "./Viewminimized.css";
import MinimizedPost from "../MinimizedPost";

class Viewminimized extends Component {
  state = {
    hoveryes: false,
  };
  handleHover = () => {
    if (this.state.hoveryes === false) {
      this.setState({ hoveryes: true });
    } else {
      this.setState({ hoveryes: false });
    }
  };
  render() {
    let showFav = ["sliderfav"];
    if (this.props.show === true) {
      showFav.push("slideout");
    }
    if (this.state.hoveryes) {
      showFav.push("slideout");
    }

    return (
      <div
        className={showFav.join(" ")}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className="leftPopoutMenu">
          <img
            src="https://i.imgur.com/l9Jgw41.png"
            alt="slideicon"
            className="slideiconleft"
          />
          <div className="overflow">
            {this.props.selectedPosts.map((post, index) => (
              <MinimizedPost
                image={post.imagethumbnail}
                key={index}
                indexValue={post.indexValue}
                title={post.title}
                getid={this.props.getid}
                deletefromfavs={this.props.deletefromfavs}
              />
            ))}
          </div>
          <div className="leftGrayBar"></div>
        </div>
      </div>
    );
  }
}

export default Viewminimized;
