import React from "react";
import style from "./main.section.css";

const MainSection = ({ children }) => (
  <section className={style.main}>{children}</section>
);

export default MainSection;
