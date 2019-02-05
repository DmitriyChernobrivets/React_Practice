import {
  fetchingMovie,
  fetchingMovieMore,
  fetchingSearch
} from "../../services/api";

const addWatchlist = movie => ({
  type: "WATCHLIST_ADD",
  payload: movie
});

const removeWatchlist = id => ({
  type: "WATCHLIST_REMOVE",
  payload: id
});
const fetchMovieByID = id => ({
  type: "FETCH_MOVIE_BY_ID",
  payload: id
});
const fetchMoviesStart = () => ({
  type: "FETCH_MOVIES_START"
});
const onFetchSuccess = movies => ({
  type: "FETCH_MOVIES_SUCCESS",
  payload: movies.data.results
});
const onFetchError = error => ({
  type: "FETCH_MOVIES_FAILURE",
  payload: error
});
const getMoreMovies = movies => ({
  type: "GET_MORE_MOVIES",
  payload: movies
});

const searchValue = value => ({
  type: "CURRENT_SEARCH_VALUE",
  payload: value
});

const fetchMovies = () => dispatch => {
  dispatch(fetchMoviesStart());
  fetchingMovie()
    .then(movies => dispatch(onFetchSuccess(movies)))
    .catch(error => dispatch(onFetchError(error)));
};

const fetchMoviesMore = pageNum => dispatch => {
  console.log(pageNum);
  dispatch(fetchMoviesStart());
  fetchingMovieMore(pageNum)
    .then(movies => dispatch(getMoreMovies(movies)))
    .catch(error => dispatch(onFetchError(error)));
};

const fetchMoviesSearchInput = value => dispatch => {
  console.log(value);
  dispatch(fetchMoviesStart());
  fetchingSearch(value)
    .then(movies => dispatch(onFetchSuccess(movies)))
    .catch(error => dispatch(onFetchError(error)));
};
export {
  fetchMovies,
  addWatchlist,
  removeWatchlist,
  fetchMovieByID,
  fetchMoviesMore,
  getMoreMovies,
  searchValue,
  fetchMoviesSearchInput
};
