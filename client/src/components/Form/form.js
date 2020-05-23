import React, { Component, useState } from "react";
import "./form.css";
// import API from "../../utils/API.";
import apiCalls from "../../utils/seenit-apis";
const API = apiCalls;

class Form extends Component {
  // Setting the component's initial state
  state = {
    postinfo: {
      title: "",
      body: "",
      imageUrl: "",
      onCommunity: "",
      postedBy: "placeholder",
    },
    slidemenu: false,
  };

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
    console.log("fart");
    if (!this.state.slidemenu) {
      this.setState({ slidemenu: true });
    }
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let postObjectInfo = {
      title: this.state.postinfo.title,
      body: this.state.postinfo.body,
      imageUrl: this.state.postinfo.imageUrl,
      onCommunity: this.state.postinfo.onCommunity,
      postedBy: this.state.postinfo.postedBy,
    };
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    API.saveinfo(postObjectInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    this.setState({
      postinfo: {
        title: "",
        body: "",
        imageUrl: "",
        onCommunity: "",
        postedBy: "placeholder",
      },
    });
  };
  render() {
    let boxClass = ["toggle-form"];
    if (this.state.slidemenu) {
      boxClass.push("active");
    }
    // Notice how each input has a `value`, `name`, and `onChange` prop

    return (
      <div className="card">
        <button onClick={() => this.handleslideclick()} className="cta-open">
          slideout menu
        </button>
        <section className={boxClass.join(" ")}>
          <div className="formwrap px-4">
            <div class="card" id="formcss">
              <div class="card" id="formcss">
                <form className="form">
                  <label>Title:</label>
                  <div>
                    <input
                      value={this.state.postinfo.title}
                      name="title"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="title"
                    />
                  </div>
                  <div>
                    <label>Body:</label>
                    <div>
                      <textarea
                        className="bodybox"
                        value={this.state.postinfo.body}
                        name="body"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="body"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <label>Image URL:</label>
                    <div>
                      <input
                        value={this.state.postinfo.imageUrl}
                        name="imageUrl"
                        onChange={this.handleInputChange}
                        type="url"
                        placeholder="imageUrl"
                      />
                    </div>
                  </div>
                  <label>Pick a Community:</label>
                  <div>
                    <select
                      value={this.state.postinfo.onCommunity}
                      onChange={this.handleChange}
                    >
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="toggle-bg"></div>
        </section>
      </div>
    );
  }
}

export default Form;
