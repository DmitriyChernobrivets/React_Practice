import React from "react";
import WatchlistCard from "./watchlistCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./watchlist.css";
import PropTypes from "prop-types";
// import { connect } from "react-redux";

const Watchlist = ({ cards, toggleModal }) => (
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
          // mountOnEnter
          unmountOnExit
        >
          <WatchlistCard key={card.id} {...card} toggleModal={toggleModal} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

Watchlist.propTypes = {
  cards: PropTypes.array.isRequired,
  deleteWatchlist: PropTypes.func,
  toggleModal: PropTypes.func
};
// const mapStateToProps = state => ({
//   ...state.watchlist
// });
export default Watchlist;
