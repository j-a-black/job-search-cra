import axios from "axios";

const KEY = process.env.REACT_APP_USAJOBS_KEY;

export default axios.create({
  baseURL: "https://data.usajobs.gov/",
  params: {
    Host: "data.usajobs.gov",
    "Authorization-Key": KEY,
  },
});
