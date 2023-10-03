import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

/* const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key":
      import.meta.env.REACT_APP_YOUTUBE_API_KEY ||
      "c0de731551msh02dd2e1370fa952p11f472jsnc7eaf8cc0c55",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
 */

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/auto-complete/",
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key":
      import.meta.env.REACT_APP_YOUTUBE_API_KEY ||
      "c0de731551msh02dd2e1370fa952p11f472jsnc7eaf8cc0c55",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
