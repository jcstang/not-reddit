import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostContainer from "./components/PostContainer/PostContainer";
import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import CreatePost from "./pages/createPost";

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
  return (
    <Router>
      <Nav />
      <Header title={"Seenit"} />
      <Switch>
        <Route exact path="/">
          <div className="container-fluid">
            <PostContainer posts={listOfPlaceholderPosts} />
          </div>
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
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
