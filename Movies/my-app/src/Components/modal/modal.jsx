import React from "react";
import PreloaderIcon from "react-preloader-icon";
import Oval from "react-preloader-icon/loaders/Oval";
import Modal from "react-modal";
import { fetchingMovieById } from "../../services/api";
// import styles from "./modal.css";
import CardInfo from "../Card-Info/Card.info";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      // <CSSTransition
      //   timeout={1000}
      //   classNames={{
      //     enter: customStyles.content,
      //     enterActive: customStyles.contentActive
      //     // exit: styles.slideExit,
      //     // exitActive: styles.slideExitActive
      //   }}
      //   unmountOnExit
      // >
      <Modal isOpen={modalIsOpen} onRequestClose={toggle} style={customStyles}>
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
      //{" "}
      // </CSSTransition>
    );
  }
}
