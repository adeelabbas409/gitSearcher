import axios from "axios";
import { searchAPI } from "./urls";

export const getSearchResults = (query, isRepo, pageNumber) => {

    return axios
      .get(searchAPI.getResults(query, isRepo, pageNumber))
      .then((response) => response)
      .catch((error) => {
        return Promise.reject(error.response);
      });
  };
  