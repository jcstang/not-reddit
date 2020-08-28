import React, { Component } from "react";
import "./form.css";
import "../Formvisualizer/FormVisualizer.css";
import apiCalls from "../../utils/seenit-apis";
import Editor1 from "../formeditor/Formeditor.js";
// import FormVisualizer from "../Formvisualizer/FormVisualizer";
import { Redirect } from "react-router-dom";
import htmlToImage from "html-to-image";
// import Axios from "axios";
import FormVisualizer from "../Formvisualizer/FormVisualizer";
const API = apiCalls;

// const goGetUserData = () => {
//   return "Jane Doe";
// };

class Form extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    body: "",
    imageUrl: "",
    postedBy: "",
    imagethumbnail: "",
    slidemenu: this.props.slidemenu,
    redirect: false,
    hoveryes: false,
  };

  componentDidMount() {
    var data = localStorage.getItem("username1");

    this.setState({ postedBy: data });
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleChange = (event) => {
    this.setState({ onCommunity: event.target.value });
  };

  handleslideclick = (event) => {
    if (!this.state.slidemenu) {
      this.setState({ slidemenu: true });
    }
  };
  handleslideclickoff = (event) => {
    if (this.state.slidemenu) {
      this.setState({ slidemenu: false });
    }
  };

  handleFormSubmit = (event) => {
    // let state = this.state;
    var that = this;
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const formHomeRefresh = this.props.refreshHomePage;
    let srcURL;
    htmlToImage
      .toJpeg(document.getElementById("visualizerbox"), { quality: 0.1 })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        srcURL = img.src;
        // console.log(srcURL);
        that.setState({ imagethumbnail: srcURL });

        // console.log(that.state);

        // go get user data from passport session? or DB?
        // this.setState({postedBy: this.goGetUserData()});

        let postObjectInfo = {
          title: that.state.title,
          body: that.state.body,
          imageUrl: that.state.imageUrl,
          onCommunity: that.state.onCommunity,
          postedBy: that.state.postedBy,
          imagethumbnail: that.state.imagethumbnail,
        };
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        API.saveinfo(postObjectInfo)
          .then((res) => {
            formHomeRefresh();
          })
          .catch((err) => console.log(err));
        that.setState({
          title: "",
          body: "",
          imageUrl: "",
          onCommunity: "",
          postedBy: that.state.postedBy,
          imagethumbnail: "",
          redirect: true,
        });
        that.handleslideclickoff();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  handleHover = () => {
    if (this.state.hoveryes === false) {
      this.setState({ hoveryes: true });
    } else {
      this.setState({ hoveryes: false });
    }
  };

  handleEditorChange = (e) => {
    this.setState({ body: e.target.getContent() });
    // console.log("Content was updated:", e.target.getContent());
  };

  render(props) {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    let boxClass = ["zindex", "toggle-form"];
    if (this.state.slidemenu) {
      boxClass.push("active");
    }
    let modalAdder = ["modal2"];
    if (this.state.slidemenu) {
      modalAdder.push("active");
    }
    let hoverpush = ["slidericon"];
    if (this.state.hoveryes) {
      hoverpush.push("slideout");
    }
    let deleteDots = ["slidedots"];
    if (this.state.hoveryes) {
      deleteDots.push("hidedots");
    } else {
      deleteDots = ["slidedots"];
    }
    let addextendarrow = ["slidearrowopen"];
    if (this.state.hoveryes) {
      addextendarrow.push("showarrow");
    } else {
      addextendarrow = ["slidearrowopen"];
    }
    // Notice how each input has a `value`, `name`, and `onChange` prop

    return (
      <div>
        <div
          className={hoverpush.join(" ")}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        >
          <img
            src="https://i.imgur.com/PWf4vFd.png"
            alt="slideicon"
            className="baseslidericon"
          />
          <img
            src="https://i.imgur.com/eStLuo5.png"
            alt="slidedots"
            className={deleteDots.join(" ")}
          />
          <img
            onClick={() => this.handleslideclick()}
            src="https://i.imgur.com/0NH3WaP.png"
            alt="slidearrowopen"
            className={addextendarrow.join(" ")}
          />
          <img
            src="https://i.imgur.com/AX08Ky8.png"
            alt="slidearrowclose"
            className="slidearrowclose"
          />
          <div className="greyline"></div>
          <div className="hovergreyslide"></div>
        </div>
        <section className={boxClass.join(" ")}>
          <div className="greyline2"></div>
          <div className="formwrap px-4 zindex">
            <img
              src="https://i.imgur.com/PWf4vFd.png"
              alt="slideicon"
              className="opensliderbase"
            />
            <img
              src="https://i.imgur.com/AX08Ky8.png"
              alt="slidearrowclose"
              className="opensliderarrow"
              onClick={() => this.handleslideclickoff()}
            />
            <div className="card zindex" id="formcss2">
              <div className="card xindex" id="formcss1">
                {/* -------- FORM --------- */}
                <form className="form zindex">
                  <label>Title:</label>
                  <div>
                    <input
                      className="formwrapinput"
                      value={this.state.title}
                      name="title"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="title"
                    />
                  </div>
                  <Editor1 handleEditorChange={this.handleEditorChange} />
                  <div>
                    <label>Image URL:</label>
                    <div>
                      <input
                        className="formwrapinput"
                        value={this.state.imageUrl}
                        name="imageUrl"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="imageUrl"
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-dark m-2"
                    onClick={this.handleFormSubmit}
                  >
                    Post
                  </button>
                  <button
                    className="btn btn-dark m-2 showclosebutton"
                    onClick={this.handleFormSubmit}
                  >
                    close
                  </button>
                </form>
              </div>
            </div>
            <FormVisualizer data={this.state} />
          </div>
          <div className={modalAdder.join(" ")}></div>
        </section>
      </div>
    );
  }
}

export default Form;
