import { combineReducers } from "redux";

const movies = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_MOVIES_SUCCESS":
      return payload;
    case "GET_MORE_MOVIES":
      return state.concat(payload.data.results);

    default:
      return state;
  }
};

const currentCategory = (state = "", { type, payload }) => {
  switch (type) {
    case "CURRENT_CATEGORY":
      return payload;
    default:
      return state;
  }
};
const currentSearchInput = (state = "", { type, payload }) => {
  switch (type) {
    case "CURRENT_SEARCH_VALUE":
      return payload;
    default:
      return state;
  }
};
const loading = (state = false, { type }) => {
  switch (type) {
    case "FETCH_MOVIES_START":
      return true;

    case "FETCH_MOVIES_SUCCESS":
    case "FETCH_MOVIES_FAILURE":
      return false;
    default:
      return state;
  }
};
const error = (state = null, { type, payload }) => {
  switch (type) {
    case "FETCH_MOVIES_FAILURE":
      return payload;
    default:
      return state;
  }
};
const moviesReducer = combineReducers({
  movies,
  loading,
  error,
  currentCategory,
  currentSearchInput
});
export default moviesReducer;
