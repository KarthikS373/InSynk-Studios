import axios from "../utils/axios.utils.js";
import { TMBD_API_KEY } from "../utils/constants.utils.js";

const fetchRecentMovies = new Promise((resolve, reject) => {
  try {
    axios
      .get("movie/popular", {
        params: {
          api_key: TMBD_API_KEY,
          language: "en-US",
          page: 1,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (e) {
    reject(e.message);
  }
});

export default fetchRecentMovies;
