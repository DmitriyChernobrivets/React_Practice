import React from "react";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";
import styles from "./modal.css";
import PropTypes from "prop-types";
import { fetchingMovieById } from "../../services/api";
import Modal from "react-responsive-modal";
import CardInfo from "../Card-Info/Card.info";

export default class ModalW extends React.Component {
  state = {
    movies: null,
    error: null,
    loading: true
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
    this.setState({
      movies: res.data,
      loading: false
    });
  };

  onFetchError = error =>
    this.setState({
      error: error.message,
      loading: false
    });
  render() {
    const { modalIsOpen, toggle } = this.props;
    const { movies, loading, error } = this.state;

    return (
      <div>
        <Modal
          open={modalIsOpen}
          onClose={toggle}
          classNames={styles}
          center
          showCloseIcon={false}
        >
          {error && <div>{error}</div>}
          {loading && (
            <PreloaderIcon
              loader={Oval}
              size={52}
              strokeWidth={12}
              strokeColor="#c62828"
              duration={800}
            />
          )}
          {!loading && <CardInfo toggle={toggle} {...movies} />}
        </Modal>
      </div>
    );
  }
}

ModalW.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func
};
