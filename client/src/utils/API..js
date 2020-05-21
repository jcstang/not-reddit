import axios from "axios";

export default {
  // sends info to sever to the database
  saveinfo: function (postinfo) {
    return axios.post("/api/sendpostinfo", postinfo);
  },
};
