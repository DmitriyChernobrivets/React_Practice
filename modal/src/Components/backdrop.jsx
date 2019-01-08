import React from "react";
import styles from "./backdrop.css";

const BackDrop = ({ children }) => (
  <div className={styles.backdrop}>{children}</div>
);

export default BackDrop;
