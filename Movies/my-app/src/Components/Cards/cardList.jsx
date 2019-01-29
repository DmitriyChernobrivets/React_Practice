import React from "react";
import Card from "./card";
import styles from "./card.css";
import InfiniteScroll from "react-infinite-scroller";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CardList = ({ films, toggleModal, AddToWatchlist, loadFunc }) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore
    // loader={
    //   <div key={0}>
    //     <PreloaderIcon
    //       className={styles.loader}
    //       loader={Oval}
    //       size={52}
    //       strokeWidth={12}
    //       strokeColor="#c62828"
    //       duration={800}
    //     />
    //   </div>
    // }
  >
    <TransitionGroup component="ul" className={styles.filmlist}>
      {films.map(film => (
        <CSSTransition
          timeout={500}
          key={film.id}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive
          }}
        >
          <Card
            {...film}
            key={film.id}
            toggleModal={toggleModal}
            AddToWatchlist={AddToWatchlist}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </InfiniteScroll>
);

CardList.propTypes = {
  films: PropTypes.array.isRequired,
  AddToWatchlist: PropTypes.func,
  toggleModal: PropTypes.func,
  loadFunc: PropTypes.func
};
export default CardList;
