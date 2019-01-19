import React from "react";
import style from "../Cards/card.css";
import Icon from "../SVG/svg";
import icons from "../SVG/icon";

export const CardPanel = ({ id, toggleModal, AddToWatchlist }) => (
  <div className={style.CardPanel}>
    <button className={style.info_btn} onClick={() => toggleModal(id)}>
      <Icon icon={icons.INFO} className={style.icon_info} />
    </button>
    <button className={style.add_btn} onClick={() => AddToWatchlist(id)}>
      <Icon icon={icons.ADDUSER} className={style.icon_add} />
    </button>
  </div>
);
