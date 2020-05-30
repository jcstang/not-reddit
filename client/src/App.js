import React, { useEffect, useReducer } from "react";
import "./App.css";
// import { connect } from "react-redux";
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
    default:
      break;
  }

  // if nothing goes down, use same old state
  return state;
};

const App = (props) => {
  // const [postListState, setPostListState] = useState([]);

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
        // setPostListState(docs.data);
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
        <Route exact path="/">
          <DisplayAllPosts posts={postState.postsFromMongo} />
        </Route>
        <Route path="/create-post" component={CreatePost} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/log-in">
          <Login dispatch={postDispatch} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

// REDUX
// =============================================================
// const mapStateToProps = (state) => {
//   return {
//     // ctr: state.counter,
//     reduxPosts: state.postList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // this dispatch call is going all the way back to that reducer in ./store/rootReducer.js
//     // onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
//     onRefreshData: () => dispatch({ type: "refreshData" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
