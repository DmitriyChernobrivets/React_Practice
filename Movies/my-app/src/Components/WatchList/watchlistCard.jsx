import React from "react";
import style from "./watchlist.css";
import Icon from "../SVG/svg";
import icons from "../SVG/icon";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeWatchlist } from "../../store/actions/actions";

const WatchlistCard = ({
  id,
  poster_path,
  title,
  release_date,
  deleteWatchlist,
  toggleModal
}) => {
  // const {  } = this.props;
  console.log(id);
  return (
    <li className={style.watchlist_item}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="img" />
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <p>Realeased: {release_date}</p>
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

WatchlistCard.propTypes = {
  cards: PropTypes.array.isRequired,
  deleteWatchlist: PropTypes.func,
  toggleModal: PropTypes.func
};

const mapdispatchToProps = dispatch => ({
  deleteWatchlist: id => dispatch(removeWatchlist(id))
});
export default connect(
  null,
  mapdispatchToProps
)(WatchlistCard);
