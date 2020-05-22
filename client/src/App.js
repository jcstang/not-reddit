import React from "react";
import logo from "./logo.png";
import "./App.css";
import { connect } from 'react-redux';
import PostContainer from "./components/PostContainer/PostContainer";
import Form from "./components/Form/form.js";
import Nav from "./components/Nav";

// TODO: plan out the components needed on homepage. (i.e. navbar, footer)
// TODO: add a react router

const listOfPlaceholderPosts = [
  {
    _id: "5ec579d5251f7e32b999058a",
    title: "hello world, hello title!",
    body: "this is the body to the post of hello world",
    postedBy: {
      "_id": "5ec56f629f99772a8f8f0cd8",
      "username": "beep2345",
      "displayName": "beepinator",
      "email": "beepinator@gmail.com",
      "password": "password123",
      "joinDate": "2012-04-23T18:25:43.511Z",
      "__v": 0
    },
    dateCreated: "2012-04-23T18:25:43.511Z",
    onCommunity: {
      "_id": "5ec577a132f33a31f9a0338a",
      "name": "lotr",
      "link": "/s/lotr",
      "__v": 0
    },
    "__v": 0
  }
]

const App = (props) => {
  return (
    <div className="App">
      <Nav/>
      <Form />
      <div className="App-header container-fluid">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Seenit</h2>
        {/* commented this out. it was behaving strangely while styling the cards */}
        {/* <p>{props.ctr}</p>
        <button onClick={props.onIncrementCounter}>+1</button> */}
      </div>
      <div className="container">
        <Form />
        <PostContainer
          posts={listOfPlaceholderPosts}
        />
      </div>
    </div>

  );
};

// *** REDUX ***
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // this dispatch call is going all the way back to that reducer in ./store/rootReducer.js
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
