import React from "react";
import style from "./card.css";
import CardPanel from "./card_panel";
import PropTypes from "prop-types";

const Card = ({
  id,
  title,
  release_date,
  poster_path,
  overview,
  vote_average,
  toggleModal,
  AddToWatchlist
}) => {
  const substring = string => string.slice(0, 80) + "...";

  return (
    <li className={style.Card}>
      <CardPanel
        id={id}
        toggleModal={toggleModal}
        AddToWatchlist={AddToWatchlist}
      />
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="fim-img"
      />
      <h3 className={style.title}>{`${title} (${release_date.slice(
        0,
        4
      )})`}</h3>
      <div className={style.vote}>{vote_average}</div>
      <p>{substring(overview)}</p>
    </li>
  );
};
Card.propTypes = {
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  AddToWatchlist: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};
export default Card;
