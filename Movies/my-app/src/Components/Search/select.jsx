import React from "react";
import Select from "react-select";
import styles from "./search.css";
import OPTIONS from "../options";
import PropTypes from "prop-types";

const SearchSelect = ({ selectedOption, changeCategory }) => (
  <div>
    <h3>Search by category</h3>
    <Select
      className={styles.select}
      value={selectedOption}
      onChange={changeCategory}
      options={OPTIONS}
    />
  </div>
);

SearchSelect.propTypes = {
  selectedOption: PropTypes.func,
  changeCategory: PropTypes.func
};
export default SearchSelect;
