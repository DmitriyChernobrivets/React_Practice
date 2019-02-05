import React, { Component } from "react";
import styles from "./Film.info.css";
import uuid from "uuid/v4";
import timeConvert from "../../../services/timeConverter";
import { fetchingMovieById } from "../../../services/api";

class Film_INFO extends Component {
  state = {
    film: null,
    error: null,
    loading: true
  };
  componentDidMount() {
    const { filmId } = this.props.match.params;

    fetchingMovieById({
      id: filmId,
      onSucces: this.onSuccess,
      onError: this.onError
    });
  }
  onSuccess = ({ data }) => {
    this.setState({
      film: data,
      loading: false
    });
  };
  onError = err => {
    this.setState({
      error: err,
      loading: false
    });
  };
  render() {
    const { film, loading } = this.state;
    return (
      <div>
        {film && (
          <div className={styles["movie-info"]}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
              alt="img"
            />
            <div className={styles.info_content}>
              <h2>{film.original_title}</h2>
              <h4>
                <i>{film.tagline}</i>
              </h4>
              <h3>GENRES: </h3>
              <ul>
                {film.genres.map(genres => (
                  <li key={uuid()}>
                    <span>{genres.name}</span>
                  </li>
                ))}
              </ul>
              <h3>PRODUCTION COUNTRIES: </h3>
              <ul>
                {film.production_countries.map(country => (
                  <li key={uuid()}>
                    <span>{country.name}</span>
                  </li>
                ))}
              </ul>
              <h3>RUN TIME: </h3>
              <p>{`${film.runtime} min. / ${timeConvert(film.runtime)}`}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// CardInfo.propTypes = {
//   poster_path: PropTypes.string.isRequired,
//   original_title: PropTypes.string.isRequired,
//   tagline: PropTypes.string.isRequired,
//   runtime: PropTypes.string.isRequired,
//   production_countries: PropTypes.array.isRequired,
//   toggle: PropTypes.func.isRequired
// };
export default Film_INFO;
