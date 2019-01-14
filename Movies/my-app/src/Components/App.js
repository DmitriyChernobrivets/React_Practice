import React, { Component } from "react";
import styles from "./App.css";
import Select from "react-select";
import CardList from "./Cards/cardList";
import { fetchingMovie, fetchingSearch } from "../services/api";
import OPTIONS from "./options";
import SearchPanel from "./Search/search_panel";
import Search from "./Search/search";
import ModalW from "./modal/modal";

export default class App extends Component {
  state = {
    selectedOption: null,
    cards: [],
    error: null,
    inputValue: "",
    modalIsOpen: false,
    movieId: null
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
  onFetchError = error => this.setState({ error: error.message });
  changeCategory = selectedOption => {
    this.setState({ selectedOption });
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
  toggleModal = id => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
      movieId: id || null
    }));
  };
  render() {
    const {
      selectedOption,
      cards,
      inputValue,
      modalIsOpen,
      movieId
    } = this.state;

    return (
      <div className={styles.App}>
        <SearchPanel>
          <Select
            className={styles.select}
            value={selectedOption}
            onChange={this.changeCategory}
            options={OPTIONS}
          />
          <Search onSubmit={this.handleInput} />
        </SearchPanel>

        {selectedOption && (
          <CardList films={cards} toggleModal={this.toggleModal} />
        )}
        {inputValue.length > 0 && (
          <CardList films={cards} toggleModal={this.toggleModal} />
        )}
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
