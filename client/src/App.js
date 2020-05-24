import React, { useState } from "react";
// import logo from "./logo.png";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostContainer from "./components/PostContainer/PostContainer";
import Nav from "./components/Nav";
// import listOfPlaceholderPosts from './placeholder-data.js'
import Axios from "axios";
import Header from "./components/Header/Header";
import CreatePost from "./pages/CreatePost/createPost";
import UserSettings from "./pages/UserSettings";


const App = (props) => {
  // console.log(props.reduxPosts);
  const [postListState, setPostListState] = useState([]);

  const refreshData = () => {
    Axios.get("/api/all-posts")
      .then((docs) => {
        setPostListState(docs.data);
      })
      .catch((err) => {
        console.log(err);
      });
      return [];
  };

  // func call for new data
  // =============================================================
  refreshData();

  return (
    <Router>
      <Nav />
      <Header title={"Seenit"} />
      <Switch>

        <Route exact path="/">
          <div className="container-fluid">
            {/* <PostContainer posts={listOfPlaceholderPosts} /> */}
            <PostContainer posts={postListState} />
          </div>
        </Route>

        <Route path="/create-post">
          <CreatePost />
        </Route>

        <Route exact path="/user-settings">
          <UserSettings />
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
