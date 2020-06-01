import axios from "axios";

export default function googleBooksApiRoutes(searchTerm) {
<<<<<<< HEAD
  const apiKey = "AIzaSyAMKEqp6ipqSkArJouMSQATp00lqtTHesY";
=======
  const apiKey = "AIzaSyDmrv-BNf605fTWjdYmc2ReKWSqkNuNHeY";
>>>>>>> 3303e8a866f799d8aa61962d68d8c36d41f0bf0d
  const formattedSearchTerm = searchTerm.split(" ").join("+");
  const formattedSearchTerm2 = encodeURIComponent(searchTerm.trim());
  const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${formattedSearchTerm2}&key=${apiKey}`;

  return axios.get(endpoint);
}
