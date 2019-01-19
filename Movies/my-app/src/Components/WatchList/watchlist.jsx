import React from "react";
import WatchlistCard from "./watchlistCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./watchlist.css";

const Watchlist = ({ cards, deleteWatchlist, toggleModal }) => (
  <div className={styles.watchlist}>
    <h2 className={styles.head}>WatchList</h2>
    <TransitionGroup component="ul">
      {cards.map(card => (
        <CSSTransition
          key={card.id}
          timeout={1000}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive
          }}
          unmountOnExit
        >
          <WatchlistCard
            key={card.id}
            card={card}
            deleteWatchlist={deleteWatchlist}
            toggleModal={toggleModal}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

export default Watchlist;
