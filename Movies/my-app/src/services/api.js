import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "fee40cf045e7a2ddd3eb575c5bb1c4eb";

const fetchingMovie = ({ selectedOption, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${selectedOption}?api_key=${API_KEY}&language=en-EN&page=1`;
  return axios
    .get(url)
    .then(onSuccess)
    .catch(onError);
};
const fetchingSearch = ({ inputValue, onSuccess, onError }) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1`;
  return axios
    .get(url)
    .then(onSuccess)
    .catch(onError);
};
const fetchingMovieById = ({ id, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`;
  return axios
    .get(url)
    .then(onSuccess)
    .catch(onError);
};
const fetchingMovieMore = ({ selectedOption, page, onSuccess, onError }) => {
  const url = `${BASE_URL}/movie/${selectedOption}?api_key=${API_KEY}&language=en-EN&page=${page}`;
  return axios
    .get(url)
    .then(onSuccess)
    .catch(onError);
};
export { fetchingMovie, fetchingSearch, fetchingMovieById, fetchingMovieMore };
