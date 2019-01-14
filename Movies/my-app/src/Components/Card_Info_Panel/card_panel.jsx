import React from "react";
import style from "./card_panel.css";

export const CardPanel = ({ id, toggleModal }) => (
  <div className={style.CardPanel}>
    <button onClick={() => toggleModal(id)}>INFO</button>
  </div>
);
