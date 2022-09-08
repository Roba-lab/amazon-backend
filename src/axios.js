import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-app-a41d8.cloudfunctions.net/api",
});
export default instance;

// http://localhost:5001/app-a41d8/us-central1/api.
