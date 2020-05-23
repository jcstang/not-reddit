const axios = require('axios');

const getFreshData = () => {
  axios.get('/api/all-posts')
    .then(docs => {
      return docs;
    })
    .catch(err => {
      console.log(err.message);
      return [];
    });
  // return [];
}

const initialState = {
  defaultImgUrl: "",
  numberOfCommunities: 1,
  numberOfPosts: 1,
  numberOfUsers: 1,
  postList: getFreshData()
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'refreshData':
      const posts = [];
      posts = getFreshData();
      console.log('here is posts data: ' + posts);
      return {
        ...state,
        postList: posts
      }
    default:
      break;
  }
  return state;
}


export default listReducer;