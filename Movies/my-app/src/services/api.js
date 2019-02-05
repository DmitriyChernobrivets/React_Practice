import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "fee40cf045e7a2ddd3eb575c5bb1c4eb";

const fetchingMovie = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=1`;
  return await axios.get(url);
};
const fetchingSearch = async inputValue => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${inputValue}&page=1`;
  return await axios.get(url);
};
const fetchingMovieMore = async page => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=${page}`;
  return await axios.get(url);
};

const fetchingMovieById = async ({ id, onSucces, onError }) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`;
  return await axios
    .get(url)
    .then(onSucces)
    .catch(onError);
};

export { fetchingMovie, fetchingSearch, fetchingMovieMore, fetchingMovieById };
