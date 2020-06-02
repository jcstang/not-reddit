import React, { Component } from "react";
import "./form.css";
import apiCalls from "../../utils/seenit-apis";
import Editor1 from "../formeditor/Formeditor.js";
import FormVisualizer from "../Formvisualizer/FormVisualizer";
import { Redirect } from "react-router-dom";
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
    postedBy: this.props.username,
    slidemenu: false,
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
    const formHomeRefresh = this.props.refreshHomePage;
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // go get user data from passport session? or DB?
    // this.setState({postedBy: this.goGetUserData()});

    let postObjectInfo = {
      title: this.state.title,
      body: this.state.body,
      imageUrl: this.state.imageUrl,
      onCommunity: this.state.onCommunity,
      postedBy: this.state.postedBy,
    };
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    API.saveinfo(postObjectInfo)
      .then((res) => {
        formHomeRefresh();
      })
      .catch((err) => console.log(err));
    this.setState({
      title: "",
      body: "",
      imageUrl: "",
      onCommunity: "",
      postedBy: this.props.username,
      redirect: true,
    });
    this.handleslideclickoff();
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
    let boxClass = ["toggle-form"];
    if (this.state.slidemenu) {
      boxClass.push("active");
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
          <div className="formwrap px-4">
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
            <div className="card" id="formcss">
              <div className="card" id="formcss">
                {/* -------- FORM --------- */}
                <form className="form">
                  <label>Title:</label>
                  <div>
                    <input
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
                </form>
              </div>
            </div>
            <FormVisualizer data={this.state} />
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
