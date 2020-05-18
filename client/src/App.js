import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux';

// TODO: plan out the components needed on homepage. (i.e. navbar, footer)
// TODO: add a router

const App = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Seenit - not reddit</h2>
        <p>{props.ctr}</p>
        <button
          onClick={props.onIncrementCounter}
        >+1</button>
      </div>
    </div>
  );
}


// *** REDUX ***
const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // this dispatch call is going all the way back to that reducer in ./store/rootReducer.js
    onIncrementCounter: () => dispatch({type: 'INCREMENT'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);