import React from "react";
import Card from "./card";
import styles from "./card.css";
import InfiniteScroll from "react-infinite-scroller";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";
import PropTypes from "prop-types";

const CardList = ({ films, toggleModal, AddToWatchlist, loadFunc }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore
    loader={
      <div key={0}>
        <PreloaderIcon
          className={styles.loader}
          loader={Oval}
          size={52}
          strokeWidth={12}
          strokeColor="#c62828"
          duration={800}
        />
      </div>
    }
  >
    <ul className={styles.filmlist}>
      {films.map(film => (
        <Card
          {...film}
          key={film.id}
          toggleModal={toggleModal}
          AddToWatchlist={AddToWatchlist}
        />
      ))}
    </ul>
  </InfiniteScroll>
);

CardList.propTypes = {
  films: PropTypes.array.isRequired,
  AddToWatchlist: PropTypes.func,
  toggleModal: PropTypes.func,
  loadFunc: PropTypes.func
};
export default CardList;
