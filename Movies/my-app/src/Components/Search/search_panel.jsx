import React from "react";
import style from "./search.css";

const SearchPanel = ({ children }) => (
  <div className={style.searchPanel}>{children}</div>
);

export default SearchPanel;
