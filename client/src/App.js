import React, { useEffect, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayAllPosts from "./pages/DisplayAllPosts/displayAllPosts";
import Axios from "axios";
import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import BacktoTop from "./components/BacktoTop/BackToTop";
import Login from "./components/Login/";
import NotFound from "./components/NotFound/";
import SignUpForm from "./components/SignUpForm/";
import CreatePost from "./pages/CreatePost/createPost";
import Footer from "./components/Footer";

// REDUCER - React hooks useReducer
const postsReducer = (state, action) => {
  switch (action.type) {
    case "getNewData":
      return {
        ...state,
        postsFromMongo: action.postDocs,
      };
    case "changeuserdata":
      return {
        ...state,
        placeHolderUser: action.placeHolderUser,
      };
    case "upLike":
      const index = action.selectedPostIndex;

      const postMongoArray = state.postsFromMongo;
      const currentLikes = postMongoArray[index].numberOfLikes;

      // increase likes by 1
      postMongoArray[index].numberOfLikes = currentLikes + 1;
      // TODO: update the post data inside mongo

      // axios put
      //     state.postsFromMongo[index]
      // then do something

      return {
        ...state,
        postsFromMongo: postMongoArray,
      };
    default:
      break;
  }

  // if nothing goes down, use same old state
  return state;
};

const App = (props) => {
  const [postState, postDispatch] = useReducer(postsReducer, {
    defaultImgUrl: "https://source.unsplash.com/sfL_QOnmy00/250x300",
    postsFromMongo: [],
    messageForUser: "",
    placeHolderUser: {
      username: "beep2434",
      displayName: "beep",
      email: "beep@gmail.com",
      password: "",
      joinDate: "2020-05-26T03:23:49.058Z",
      imageUrl: "https://source.unsplash.com/6anudmpILw4/200x200",
    },
  });

  const refreshData = () => {
    Axios.get("/api/all-posts")
      .then((docs) => {
        postDispatch({ type: "getNewData", postDocs: docs.data });
      })
      .catch((err) => {
        console.log(err);
      });
    return [];
  };

  // like componentWillMount or didmount
  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Router>
      <Nav />
      <Header title={"Seenit"} />
      <BacktoTop />
      <Switch>
        <Route path="/home">
          <DisplayAllPosts
            posts={postState.postsFromMongo}
            dispatch={postDispatch}
          />
        </Route>
        <Route path="/sign-up" component={SignUpForm} />
        <Route exact path="/">
          <Login dispatch={postDispatch} />
        </Route>
        <Route
          path="/create-post"
          component={() => (
            <CreatePost
              refreshHomePage={refreshData}
              username={postState.placeHolderUser.username}
            />
          )}
        />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
