import React, { Component } from "react";
import styles from "./card.info.css";
import uuid from "uuid/v4";
import timeConvert from "../../../services/timeConverter";
// import Icon from "../../SVG/svg";
// import icons from "../../SVG/icon";
// import PropTypes from "prop-types";
// import Modal from "react-responsive-modal";
// import { fetchingMovieById } from "../../../services/api";

class CardInfo extends Component {
  render() {
    const { selectedMovie } = this.state;
    console.log("xaxa");
    return (
      <div>
        {selectedMovie && (
          <div className={styles["movie-info"]}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${
                selectedMovie.poster_path
              }`}
              alt="img"
            />
            <div className={styles.info_content}>
              <h2>{selectedMovie.original_title}</h2>
              <h4>
                <i>{selectedMovie.tagline}</i>
              </h4>
              <h3>GENRES: </h3>
              <ul>
                {selectedMovie.genres.map(genres => (
                  <li key={uuid()}>
                    <span>{genres.name}</span>
                  </li>
                ))}
              </ul>
              <h3>PRODUCTION COUNTRIES: </h3>
              <ul>
                {selectedMovie.production_countries.map(country => (
                  <li key={uuid()}>
                    <span>{country.name}</span>
                  </li>
                ))}
              </ul>
              <h3>RUN TIME: </h3>
              <p>{`${selectedMovie.runtime} min. / ${timeConvert(
                selectedMovie.runtime
              )}`}</p>
            </div>
          </div>
        )}
        )
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
export default CardInfo;
