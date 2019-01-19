import React from "react";
import style from "./watchlist.css";
import Icon from "../SVG/svg";
import icons from "../SVG/icon";

const WatchlistCard = ({ card, deleteWatchlist, toggleModal }) => {
  const { id, poster_path, title } = card;
  return (
    <li className={style.watchlist_item}>
      <a href="#">
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="img" />
      </a>
      <div className={style.content}>
        <h3>{title}</h3>
        <div className={style.watchlist_controllPanel}>
          <button onClick={() => toggleModal(id)}>
            <Icon icon={icons.INFO} className={style.info_svg} />
          </button>
          <button onClick={() => deleteWatchlist(id)}>
            <Icon icon={icons.DELETE} className={style.info_svg} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default WatchlistCard;
