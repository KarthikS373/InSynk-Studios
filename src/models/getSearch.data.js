import axios from "../utils/axios.utils.js";
import { TMBD_API_KEY } from "../utils/constants.utils.js";

const fetchSearch = (search) =>
  new Promise((resolve, reject) => {
    try {
      axios
        .get(
          `/search/movie`,
          {
            params: {
              api_key: TMBD_API_KEY,
              language: "en-US",
              page: 1,
              include_adult: true,
              query: search,
            },
          },
          2500
        )
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

export default fetchSearch;
