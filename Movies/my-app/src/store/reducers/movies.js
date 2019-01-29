import { combineReducers } from "redux";

const movies = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_MOVIES_SUCCESS":
      return payload;
    default:
      return state;
  }
};
const loading = (state = false, { type, payload }) => {
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
  error
});
export default moviesReducer;
