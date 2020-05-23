import React, { useReducer } from "react";
import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostContainer from "./components/PostContainer/PostContainer";
import Form from "./components/Form/form.js";
import Nav from "./components/Nav";
import axios from 'axios';

// TODO: plan out the components needed on homepage. (i.e. navbar, footer)
// TODO: add a react router

// REDUCER
const initialState = {
  placeholderPosts: [],
  message: "hi"
};

const allPostReducer = (state, action) => {
  // TODO: switch statement for action.type
  switch (action.type) {
    case 'refresh':
      return {
        ...state,
        placeholderPosts: refreshData()
      }
    default:
      break;
  }
  return state;
}

// FIXME: problem: dispatch is not defined, outcome: use it to save

const [ allPostState, allPostDispatch ] = useReducer(allPostReducer, initialState);

const refreshData = () => {
  axios
    .get('/api/all-posts')
    .then(docs => {
      allPOstDispatch({ type: 'refresh', postDocs: docs.data});
    })
    .catch(err => {
      console.log(err.message);
    });
}


// const listOfPlaceholderPosts = [
//   {
//     _id: "5ec579d5251f7e32b999058a",
//     title: "hello world, hello title!",
//     img: "https://i.imgur.com/gZjp2um.jpg",
//     body: "this is the body to the post of hello world",
//     postedBy: {
//       _id: "5ec56f629f99772a8f8f0cd8",
//       username: "beep2345",
//       displayName: "beepinator",
//       email: "beepinator@gmail.com",
//       password: "password123",
//       joinDate: "2012-04-23T18:25:43.511Z",
//       __v: 0,
//     },
//     dateCreated: "2012-04-23T18:25:43.511Z",
//     onCommunity: {
//       _id: "5ec577a132f33a31f9a0338a",
//       name: "lotr",
//       link: "/s/lotr",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "5ec579d5251f7e32b999058a",
//     title: "hello world, hello title!",
//     img: "https://i.imgur.com/gZjp2um.jpg",
//     body: "this is the body to the post of hello world",
//     postedBy: {
//       _id: "5ec56f629f99772a8f8f0cd8",
//       username: "beep2345",
//       displayName: "beepinator",
//       email: "beepinator@gmail.com",
//       password: "password123",
//       joinDate: "2012-04-23T18:25:43.511Z",
//       __v: 0,
//     },
//     dateCreated: "2012-04-23T18:25:43.511Z",
//     onCommunity: {
//       _id: "5ec577a132f33a31f9a0338a",
//       name: "lotr",
//       link: "/s/lotr",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "5ec579d5251f7e32b999058a",
//     title: "hello world, hello title!",
//     img: "https://i.imgur.com/gZjp2um.jpg",
//     body: "this is the body to the post of hello world",
//     postedBy: {
//       _id: "5ec56f629f99772a8f8f0cd8",
//       username: "beep2345",
//       displayName: "beepinator",
//       email: "beepinator@gmail.com",
//       password: "password123",
//       joinDate: "2012-04-23T18:25:43.511Z",
//       __v: 0,
//     },
//     dateCreated: "2012-04-23T18:25:43.511Z",
//     onCommunity: {
//       _id: "5ec577a132f33a31f9a0338a",
//       name: "lotr",
//       link: "/s/lotr",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "5ec579d5251f7e32b999058a",
//     title: "hello world, hello title!",
//     img: "https://i.imgur.com/gZjp2um.jpg",
//     body: "this is the body to the post of hello world",
//     postedBy: {
//       _id: "5ec56f629f99772a8f8f0cd8",
//       username: "beep2345",
//       displayName: "beepinator",
//       email: "beepinator@gmail.com",
//       password: "password123",
//       joinDate: "2012-04-23T18:25:43.511Z",
//       __v: 0,
//     },
//     dateCreated: "2012-04-23T18:25:43.511Z",
//     onCommunity: {
//       _id: "5ec577a132f33a31f9a0338a",
//       name: "lotr",
//       link: "/s/lotr",
//       __v: 0,
//     },
//     __v: 0,
//   },
//   {
//     _id: "5ec579d5251f7e32b999058a",
//     title: "hello world, hello title!",
//     img: "https://i.imgur.com/gZjp2um.jpg",
//     body: "this is the body to the post of hello world",
//     postedBy: {
//       _id: "5ec56f629f99772a8f8f0cd8",
//       username: "beep2345",
//       displayName: "beepinator",
//       email: "beepinator@gmail.com",
//       password: "password123",
//       joinDate: "2012-04-23T18:25:43.511Z",
//       __v: 0,
//     },
//     dateCreated: "2012-04-23T18:25:43.511Z",
//     onCommunity: {
//       _id: "5ec577a132f33a31f9a0338a",
//       name: "lotr",
//       link: "/s/lotr",
//       __v: 0,
//     },
//     __v: 0,
//   }
// ];

const App = (props) => {
  console.log(props.reduxPosts);
  refreshData();

  return (
    <Router>
      <Nav />
      <div className="App">
        <div className="App-header container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Seenit</h2>
        </div>
        <div className="container-fluid">
          <Form />
          {/* <PostContainer posts={listOfPlaceholderPosts} /> */}
          <PostContainer posts={allPostState} />
        </div>
      </div>
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
    onRefreshData: () => dispatch({ type: 'refreshData'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
