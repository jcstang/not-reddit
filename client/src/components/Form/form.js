import React, { Component } from "react";
import "./form.css";
// import API from "../../utils/API.";
import apiCalls from "../../utils/seenit-apis";
const API = apiCalls;

class Form extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    body: "",
    imageUrl: "",
    onCommunity: "",
    postedBy: "placeholder",
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

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
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
        console.log(res);
      })
      .catch((err) => console.log(err));
    this.setState({
      title: "",
      body: "",
      imageUrl: "",
      onCommunity: "",
      postedBy: "placeholder",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div class="card" id="formcss">
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
          <div>
            <label>Body:</label>
            <div>
              <textarea
                class="bodybox"
                value={this.state.body}
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
                value={this.state.imageUrl}
                name="imageUrl"
                onChange={this.handleInputChange}
                type="url"
                placeholder="imageUrl"
              />
            </div>
          </div>
          <label>Pick a Community:</label>
          <div>
            <select value={this.state.onCommunity} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
