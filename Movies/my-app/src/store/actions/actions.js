import { fetchingMovie } from "../../services/api";

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

const fetchMovies = query => dispatch => {
  dispatch(fetchMoviesStart());
  fetchingMovie(query)
    .then(movies => dispatch(onFetchSuccess(movies)))
    .catch(error => dispatch(onFetchError(error)));
};

export { fetchMovies, addWatchlist, removeWatchlist, fetchMovieByID };
