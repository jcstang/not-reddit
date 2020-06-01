// ***************************************************************************
// seenit-apis.js
// Contains util calls for different apis
// ***************************************************************************
import axios from "axios";

function googleBooksApiRoutes(searchTerm) {
  const apiKey = "AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY";
  // const formattedSearchTerm = searchTerm.split(" ").join("+");
  const formattedSearchTerm2 = encodeURIComponent(searchTerm.trim());
  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm2}&key=${apiKey}`;

  return axios.get(endpoint);
}

function saveInfo(postinfo) {
  return axios.post("/api/post", postinfo);
}

export default {
  searchGoogleBooks: googleBooksApiRoutes,
  saveinfo: saveInfo,
};
