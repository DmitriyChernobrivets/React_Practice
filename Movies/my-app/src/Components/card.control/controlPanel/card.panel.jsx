import React, { Component } from "react";
import style from "../../Cards/card.css";
import Icon from "../../SVG/svg";
import icons from "../../SVG/icon";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addWatchlist } from "../../../store/actions/actions";
import Modal from "react-responsive-modal";
import CardInfo from "../controlPanel/card.info";

class CardPanel extends Component {
  state = {
    isModalOpen: false
  };
  togleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };
  render() {
    const { isModalOpen } = this.state;
    const { id, AddToWatchlist, watchlistmovie } = this.props;
    const getWatchlistItem = id =>
      watchlistmovie.find(movie => movie.id === id);

    return (
      <div className={style.CardPanel}>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onClose={this.togleModal}
            // classNames={styles}
            center
            showCloseIcon={false}
          >
            <CardInfo id={id} toggle={this.togleModal} />
          </Modal>
        )}
        <button className={style.info_btn} onClick={this.togleModal}>
          <Icon icon={icons.INFO} className={style.icon_info} />
        </button>
        <button
          className={style.add_btn}
          onClick={() => AddToWatchlist(getWatchlistItem(id))}
        >
          <Icon icon={icons.ADDUSER} className={style.icon_add} />
        </button>
      </div>
    );
  }
}

CardPanel.propTypes = {
  id: PropTypes.number.isRequired,
  toggleModal: PropTypes.func,
  AddToWatchlist: PropTypes.func
};
const mapStateToProps = state => ({
  watchlistmovie: state.movie.movies
});
const mapDispatchToProps = dispatch => ({
  AddToWatchlist: id => dispatch(addWatchlist(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardPanel);
