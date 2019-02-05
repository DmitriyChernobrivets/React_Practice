import React, { Component, Fragment } from "react";
import style from "./style.css";
// import PropTypes from "prop-types";
import Search from "../../pages/HOME/Search/search";
import { connect } from "react-redux";
import CardList from "./Cards/cardList";
import { fetchMovies } from "../../../store/actions/actions";

class Home_Page extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <Fragment>
        <Search />
        {movies && <CardList {...this.props} />}
      </Fragment>
    );
  }
}

// MainSection.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
// };
const stateToProps = state => ({
  movies: state.movie.movies,
  watchlist: state.watchlist
});
const dispatchToProps = { fetchMovies };
export default connect(
  stateToProps,
  dispatchToProps
)(Home_Page);
