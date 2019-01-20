import React from "react";
import style from "../Cards/card.css";
import Icon from "../SVG/svg";
import icons from "../SVG/icon";
import PropTypes from "prop-types";

const CardPanel = ({ id, toggleModal, AddToWatchlist }) => (
  <div className={style.CardPanel}>
    <button className={style.info_btn} onClick={() => toggleModal(id)}>
      <Icon icon={icons.INFO} className={style.icon_info} />
    </button>
    <button className={style.add_btn} onClick={() => AddToWatchlist(id)}>
      <Icon icon={icons.ADDUSER} className={style.icon_add} />
    </button>
  </div>
);

CardPanel.propTypes = {
  id: PropTypes.number.isRequired,
  toggleModal: PropTypes.func,
  AddToWatchlist: PropTypes.func
};
export default CardPanel;
