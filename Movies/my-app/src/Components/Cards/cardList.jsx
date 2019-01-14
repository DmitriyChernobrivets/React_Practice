import React from "react";
import Card from "./card";
import style from "./card.css";
import { CardPanel } from "../Card_Info_Panel/card_panel";

const CardList = ({ films, toggleModal }) => (
  <ul className={style.filmlist}>
    {films.map(film => (
      <Card {...film} key={film.id} toggleModal={toggleModal} />
    ))}
  </ul>
);

export default CardList;
