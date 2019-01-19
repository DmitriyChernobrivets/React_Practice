import React, { Component } from "react";
import styles from "./App.css";
import Select from "react-select";
import CardList from "./Cards/cardList";
import {
  fetchingMovie,
  fetchingSearch,
  fetchingMovieMore
} from "../services/api";
import OPTIONS from "./options";
import SearchPanel from "./Search/search_panel";
import Search from "./Search/search";
import ModalW from "./modal/modal";
import Watchlist from "./WatchList/watchlist";
import MainSection from "./Main.section/Main.section";

export default class App extends Component {
  state = {
    selectedOption: null,
    cards: [],
    error: null,
    inputValue: "",
    modalIsOpen: false,
    movieId: null,
    watchlist: []
  };
  componentDidMount() {
    this.getFromStorage();
  }
  getFromStorage = () => {
    const storage = localStorage.getItem("watchlist");
    this.setState({
      watchlist: JSON.parse(storage)
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { selectedOption } = this.state;
    const prevCategory = prevState.selectedOption;
    const nextCategory = selectedOption;

    if (prevCategory !== nextCategory) {
      fetchingMovie({
        selectedOption: nextCategory.value,
        onSuccess: this.onFetchSuccess,
        onError: this.onFetchError
      });
    }
  }

  onFetchSuccess = res => {
    this.setState({ cards: res.data.results });
  };
  onFetchSuccessMore = res => {
    this.setState(prev => ({
      cards: prev.cards.concat(res.data.results)
    }));
  };
  onFetchError = error => this.setState({ error: error.message });
  changeCategory = selectedOption => {
    this.setState({ selectedOption, loading: true });
  };
  handleInput = evt => {
    const { inputValue } = this.state;

    this.setState({ inputValue: evt.target.value });
    fetchingSearch({
      inputValue,
      onSuccess: this.onFetchSuccess,
      onError: this.onFetchError
    });
  };
  addToStorage = () => {
    const { watchlist } = this.state;

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  AddToWatchlist = id => {
    const { cards, watchlist } = this.state;
    const selectedMovie = cards.find(movie => movie.id === id);
    const isDuplicate = watchlist.find(movie => movie.id === id);

    if (isDuplicate) return;

    this.setState(
      prev => ({
        watchlist: [selectedMovie, ...prev.watchlist]
      }),
      () => this.addToStorage()
    );
  };
  deleteWatchlist = id => {
    const { watchlist } = this.state;
    const removedList = watchlist.filter(film => film.id !== id);

    this.setState(
      {
        watchlist: removedList
      },
      () => this.addToStorage()
    );
  };
  toggleModal = id => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
      movieId: id || null
    }));
  };
  loadFunc = page => {
    const { selectedOption } = this.state;
    if (!selectedOption) return;

    fetchingMovieMore({
      selectedOption: selectedOption.value,
      page: page + 1,
      onSuccess: this.onFetchSuccessMore,
      onError: this.onFetchError
    });
  };
  render() {
    const {
      selectedOption,
      error,
      cards,
      inputValue,
      modalIsOpen,
      movieId,
      watchlist
    } = this.state;

    return (
      <div className={styles.App}>
        {error && <div>{error}</div>}
        {watchlist && (
          <Watchlist
            cards={watchlist}
            deleteWatchlist={this.deleteWatchlist}
            toggleModal={this.toggleModal}
          />
        )}
        <MainSection>
          <SearchPanel>
            <Select
              className={styles.select}
              value={selectedOption}
              onChange={this.changeCategory}
              options={OPTIONS}
            />
            <Search onSubmit={this.handleInput} />
          </SearchPanel>

          {cards.length > 0 && (
            <CardList
              films={cards}
              toggleModal={this.toggleModal}
              AddToWatchlist={this.AddToWatchlist}
              loadFunc={this.loadFunc}
            />
          )}
        </MainSection>

        {modalIsOpen && (
          <ModalW
            modalIsOpen={modalIsOpen}
            toggle={this.toggleModal}
            movieId={movieId}
          />
        )}
      </div>
    );
  }
}
