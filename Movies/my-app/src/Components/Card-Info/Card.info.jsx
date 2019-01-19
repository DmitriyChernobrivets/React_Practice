import React from "react";
import styles from "./card-info.css";
import uuid from "uuid/v4";
import timeConvert from "../../services/timeConverter";
import Icon from "../SVG/svg";
import icons from "../SVG/icon";
const CardInfo = ({
  poster_path,
  original_title,
  production_countries,
  tagline,
  genres,
  runtime,
  toggle
}) => {
  return (
    <div className={styles["movie-info"]}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="img" />
      </div>
      <div className={styles.info_content}>
        <h2>{original_title}</h2>
        <h4>
          <i>{tagline}</i>
        </h4>
        <h3>GENRES: </h3>
        <ul>
          {genres.map(genres => (
            <li key={uuid()}>
              <span>{genres.name}</span>
            </li>
          ))}
        </ul>
        <h3>PRODUCTION COUNTRIES: </h3>
        <ul>
          {production_countries.map(country => (
            <li key={uuid()}>
              <span>{country.name}</span>
            </li>
          ))}
        </ul>
        <h3>RUN TIME: </h3>
        <p>{`${runtime} min. / ${timeConvert(runtime)}`}</p>
        <button onClick={toggle}>
          <Icon icon={icons.CLOSE} className={styles.info_svg} />
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
