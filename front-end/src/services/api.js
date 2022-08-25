import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3334",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Origin, X-Request-Width, Accept"
  },
});
