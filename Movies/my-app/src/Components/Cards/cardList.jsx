import React from "react";
import Card from "./card";
import style from "./card.css";
import InfiniteScroll from "react-infinite-scroller";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";

const CardList = ({ films, toggleModal, AddToWatchlist, loadFunc }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore
    loader={
      <div className="loader" key={0}>
        <PreloaderIcon
          loader={Oval}
          size={52}
          strokeWidth={12}
          strokeColor="#c62828"
          duration={800}
        />
      </div>
    }
  >
    <ul className={style.filmlist}>
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

export default CardList;
