import React from "react";
import style from "./search.css";
import PropTypes from "prop-types";

const SearchPanel = ({ children }) => (
  <div className={style.searchPanel}>{children}</div>
);

SearchPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired)
};
export default SearchPanel;
