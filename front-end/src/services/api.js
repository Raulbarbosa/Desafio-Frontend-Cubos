import axios from "axios";

export default axios.create({
  baseURL: "https://code-runners-desafio05.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Origin, X-Request-Width, Accept"
  },
});
