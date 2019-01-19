import React from "react";
import style from "./search.css";

const Search = ({ onSubmit }) => (
  <input
    className={style.input}
    type="text"
    placeholder="Input"
    onSubmit={onSubmit}
  />
);

export default Search;
