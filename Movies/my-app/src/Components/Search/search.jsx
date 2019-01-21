import React from "react";
import style from "./search.css";
import Icon from "../SVG/svg";
import icons from "../SVG/icon";
import PropTypes from "prop-types";

const Search = ({ handleInputChange, handleSearch }) => (
  <div>
    <h3>Search by title</h3>
    <input
      className={style.input}
      type="text"
      placeholder="Search"
      onChange={handleInputChange}
      onSubmit={handleSearch}
      autoComplete="true"
    />
    <button onClick={handleSearch}>
      <Icon icon={icons.SEARCH} />
    </button>
  </div>
);

Search.propTypes = {
  handleInputChange: PropTypes.func,
  handleSearch: PropTypes.func
};
export default Search;
