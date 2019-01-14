import React from "react";
import style from "./card.css";
import { CardPanel } from "../Card_Info_Panel/card_panel";

const Card = ({ id, title, release_date, poster_path, toggleModal }) => (
  <li className={style.Card}>
    <CardPanel id={id} toggleModal={toggleModal} />
    <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="fim-img" />
    <h3>{title}</h3>
    <p>{release_date}</p>
  </li>
);

export default Card;
