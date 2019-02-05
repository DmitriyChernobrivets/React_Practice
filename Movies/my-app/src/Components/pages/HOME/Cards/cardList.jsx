import React from "react";
import Card from "./card";
import styles from "./card.css";
import InfiniteScroll from "react-infinite-scroller";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { fetchMoviesMore } from "../../../../store/actions/actions";

const CardList = ({ movies, getMore }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={getMore}
      hasMore
      loader={
        <div key={0}>
          <PreloaderIcon
            className={styles.loader}
            loader={Oval}
            size={52}
            strokeWidth={8}
            strokeColor="#42A5F5"
            duration={800}
          />
        </div>
      }
    >
      <TransitionGroup component="ul" className={styles.filmlist}>
        {movies.map(film => (
          <CSSTransition
            timeout={500}
            key={film.id}
            classNames={{
              enter: styles.slideEnter,
              enterActive: styles.slideEnterActive
            }}
          >
            <Link to={`/${film.id}`} className={styles.Card}>
              <Card {...film} key={film.id} />
            </Link>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </InfiniteScroll>
  );
};

// CardList.propTypes = {
//   films: PropTypes.array.isRequired,
//   AddToWatchlist: PropTypes.func,
//   toggleModal: PropTypes.func,
//   loadFunc: PropTypes.func
// };

const dispatchToProps = dispatch => ({
  getMore: pageNum => dispatch(fetchMoviesMore(pageNum))
});

export default connect(
  null,
  dispatchToProps
)(CardList);
