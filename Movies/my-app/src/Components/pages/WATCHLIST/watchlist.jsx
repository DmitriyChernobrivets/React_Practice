import React from "react";
import WatchlistCard from "./card/watchlistCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "../../../Components/pages/WATCHLIST/card/watchlist.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Watchlist = ({ watchlist }) => (
  <div className={styles.watchlist}>
    <h2 className={styles.head}>WatchList</h2>
    <TransitionGroup component="ul">
      {watchlist &&
        watchlist.map(card => (
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
            <WatchlistCard key={card.id} {...card} />
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

const mapStateToProps = state => ({
  watchlist: state.movie.watchlist
});
export default connect(mapStateToProps)(Watchlist);
