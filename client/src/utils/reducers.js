import React, { useReducer } from "react";
import axios from 'axios';

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


export default {
  allPostReducer: allPostReducer
}