import React from "react";
import Select from "react-select";
import styles from "./search.css";
import OPTIONS from "../options";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMovies } from "../../store/actions/actions";
const SearchSelect = ({ changeCategory }) => (
  <div>
    <h3>Search by category</h3>
    <Select
      className={styles.select}
      onChange={changeCategory}
      options={OPTIONS}
    />
  </div>
);

SearchSelect.propTypes = {
  // selectedOption: PropTypes.func,
  changeCategory: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  changeCategory: ({ value }) => dispatch(fetchMovies(value))
});

export default connect(
  null,

  mapDispatchToProps
)(SearchSelect);
