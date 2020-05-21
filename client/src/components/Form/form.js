import React, { Component } from "react";
import './form.css';
// import API from "../../utils/API.";
import apiCalls from '../../utils/seenit-apis';
const API = apiCalls.saveinfo;

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    body: "",
    imgurl: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let postObjectInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      body: this.state.body,
      imgurl: this.state.imgurl,
    };
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    API.saveinfo(postObjectInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    this.setState({
      firstName: "",
      lastName: "",
      body: "",
      imgurl: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.body}
            name="body"
            onChange={this.handleInputChange}
            type="text"
            placeholder="body"
          />
          <input
            value={this.state.imgurl}
            name="imgurl"
            onChange={this.handleInputChange}
            type="url"
            placeholder="imgurl"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
