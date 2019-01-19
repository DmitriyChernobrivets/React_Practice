import React from "react";
import style from "./card.css";
import { CardPanel } from "./card_panel";

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
  const substring = string => {
    const str = string.substr(60);
    return string.replace(new RegExp(str), "...");
  };
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
export default Card;
