const axios = require("axios");

const getFreshData = () => {
  axios
    .get("/api/all-posts")
    .then((docs) => {
      return docs;
    })
    .catch((err) => {
      console.log(err.message);
      return [];
    });
  // return [];
};

const rereFreshDaData = () => {
  return axios.get("/api/all-posts");
};

const initialState = {
  defaultImgUrl: "",
  numberOfCommunities: 1,
  numberOfPosts: 1,
  numberOfUsers: 1,
  postList: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "refreshData":
      // const posts = [];
      // posts = rereFreshDaData()
      //   .then(docs => {

      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
      // posts = getFreshData();
      // console.log('here is posts data: ' + posts);
      return {
        ...state,
        postList: rereFreshDaData()
          .then((docs) => {
            return docs.data;
          })
          .catch((err) => {
            console.log(err);
          }),
      };
    default:
      break;
  }
  return state;
};

export default dataReducer;
