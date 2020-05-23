import React from "react";
import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostContainer from "./components/PostContainer/PostContainer";
import Form from "./components/Form/form.js";
import Nav from "./components/Nav";

// TODO: plan out the components needed on homepage. (i.e. navbar, footer)
// TODO: add a react router

const listOfPlaceholderPosts = [
  {
    _id: "5ec579d5251f7e32b999058a",
    title: "hello world, hello title!",
    img: "https://i.imgur.com/gZjp2um.jpg",
    body: "this is the body to the post of hello world",
    postedBy: {
      _id: "5ec56f629f99772a8f8f0cd8",
      username: "beep2345",
      displayName: "beepinator",
      email: "beepinator@gmail.com",
      password: "password123",
      joinDate: "2012-04-23T18:25:43.511Z",
      __v: 0,
    },
    dateCreated: "2012-04-23T18:25:43.511Z",
    onCommunity: {
      _id: "5ec577a132f33a31f9a0338a",
      name: "lotr",
      link: "/s/lotr",
      __v: 0,
    },
    __v: 0,
  },
];

const App = (props) => {
  console.log(props.reduxPosts);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/all-posts">
          <div className="App">
            <div className="App-header container-fluid">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Seenit</h2>
            </div>
            <div className="container">
              <Form />
            </div>
          </div>
        </Route>
        <div className="container-fluid">
          <PostContainer posts={listOfPlaceholderPosts} />
        </div>
      </Switch>
    </Router>
  );
};

// REDUX
// =============================================================
const mapStateToProps = (state) => {
  return {
    // ctr: state.counter,
    reduxPosts: state.postList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // this dispatch call is going all the way back to that reducer in ./store/rootReducer.js
    // onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onRefreshData: () => dispatch({ type: "refreshData" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
