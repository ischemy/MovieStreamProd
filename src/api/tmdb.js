import axios from "axios"

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "560d2707c1f25f499312a978ad129c74",
  },
});