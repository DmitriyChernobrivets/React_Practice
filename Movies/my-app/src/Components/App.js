import React, { Component } from "react";
import styles from "./App.css";
import SearchSelect from "./Search/select";
import CardList from "./Cards/cardList";
import {
  fetchingMovie,
  fetchingSearch,
  fetchingMovieMore
} from "../services/api";
import SearchPanel from "./Search/search_panel";
import Search from "./Search/search";
// import ModalW from "./modal/modal";
import Watchlist from "./WatchList/watchlist";
import MainSection from "./Main.section/Main.section";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { movies, error, watchlist } = this.props;
    return (
      <div className={styles.App}>
        {error && <div>{error}</div>}
        {watchlist && <Watchlist cards={watchlist} />}
        <MainSection>
          <SearchPanel>
            <SearchSelect />

            <Search
              handleInputChange={this.handleInputChange}
              handleSearch={this.handleSearch}
            />
          </SearchPanel>

          {movies && <CardList films={movies} />}
        </MainSection>
      </div>
    );
  }
}
const stateToProps = state => ({
  movies: state.movie.movies,
  watchlist: state.watchlist
});

export default connect(stateToProps)(App);
