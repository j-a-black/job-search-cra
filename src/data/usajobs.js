import axios from "axios";

const KEY = process.env.REACT_APP_USAJOBS_KEY;

export default axios.create({
  baseURL: "https://data.usajobs.gov/",
  headers: {
    "Authorization-Key": KEY,
  },
});
