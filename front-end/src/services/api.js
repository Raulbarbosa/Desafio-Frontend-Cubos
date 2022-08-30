import axios from "axios";

export default axios.create({
  baseURL: "https://code-runners-6qakl.ondigitalocean.app/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Origin, X-Request-Width, Accept"
  },
});
