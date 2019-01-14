import React from "react";

import Modal from "react-modal";
import { fetchingMovieById } from "../../services/api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

export default class ModalW extends React.Component {
  state = {
    movies: null,
    error: null
  };
  componentDidMount() {
    const { movieId } = this.props;

    fetchingMovieById({
      id: movieId,
      onSuccess: this.onFetchSuccess,
      onError: this.onFetchError
    });
  }

  onFetchSuccess = res => {
    this.setState({ movies: res.data });
  };

  onFetchError = error => this.setState({ error: error.message });
  render() {
    const { modalIsOpen, toggle } = this.props;
    const { movies } = this.state;

    return (
      movies && (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={toggle}
            style={customStyles}
          >
            <button onClick={toggle}>close</button>
            <div>{movies.original_title}</div>
          </Modal>
        </div>
      )
    );
  }
}
