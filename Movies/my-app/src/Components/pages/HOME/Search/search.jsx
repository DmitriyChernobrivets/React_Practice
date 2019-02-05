import React from "react";
import style from "./search.css";
import Icon from "@svg/svg";
import icons from "@svg/icon";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchMoviesSearchInput,
  searchValue
} from "../../../../store/actions/actions";

const Search = ({ handleInputChange, handleSearch, value }) => {
  const search = () => handleSearch(value);
  return (
    <div>
      <h3>Search by title</h3>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        onSubmit={search}
        autoComplete="true"
      />
      <button onClick={search}>
        <Icon icon={icons.SEARCH} />
      </button>
    </div>
  );
};

// Search.propTypes = {
//   handleInputChange: PropTypes.func,
//   handleSearch: PropTypes.func
// };

const stateToProps = state => ({
  value: state.movie.currentSearchInput
});
const dispatchToProps = dispatch => ({
  handleInputChange: evt => dispatch(searchValue(evt.target.value)),
  handleSearch: value => dispatch(fetchMoviesSearchInput(value))
});
export default connect(
  stateToProps,
  dispatchToProps
)(Search);
