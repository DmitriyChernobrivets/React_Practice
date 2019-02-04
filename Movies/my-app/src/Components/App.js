import React, { Component } from "react";
import styles from "./App.css";
import SearchSelect from "./Search/select";
import CardList from "./Cards/cardList";
import SearchPanel from "./Search/search_panel";
import Search from "./Search/search";
import Watchlist from "./WatchList/watchlist";
import MainSection from "./Main.section/Main.section";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    console.log(this.props);
    const { movies, error, watchlist } = this.props;
    return (
      <div className={styles.App}>
        <Route path="/" component={MainSection} />
        <Route path="/watchlist" component={Watchlist} />
        {/* {error && <div>{error}</div>}
        {watchlist && <Watchlist cards={watchlist} />}
        <MainSection>
          <SearchPanel>
            <SearchSelect />
            <Search />
          </SearchPanel>

          {movies && <CardList films={movies} />}
        </MainSection> */}
      </div>
    );
  }
}
const stateToProps = state => ({
  movies: state.movie.movies,
  watchlist: state.watchlist
});

export default connect(stateToProps)(App);
