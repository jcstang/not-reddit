import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// *** REDUX ***
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './store/rootReducer';
// import dataReducer from './store/dataReducer';
// const store = createStore(dataReducer);

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };
}

ReactDOM.render(
  <App />,
  document.getElementById("root"));

registerServiceWorker();