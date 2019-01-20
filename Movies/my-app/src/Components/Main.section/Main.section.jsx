import React from "react";
import style from "./main.section.css";
import PropTypes from "prop-types";

const MainSection = ({ children }) => (
  <section className={style.main}>{children}</section>
);

MainSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
};

export default MainSection;
