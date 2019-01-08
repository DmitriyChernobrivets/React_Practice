import React from "react";
import PropTypes from "prop-types";
import Styles from "./button.css";

const Button = ({ label, type, active, onClick }) => {
  const btnActive = active ? Styles.active : Styles.Button;

  return (
    <button className={btnActive} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: "button",
  active: false,
  onClick: () => null
};
export default Button;
