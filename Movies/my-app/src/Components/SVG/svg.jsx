import React from "react";
import PropTypes from "prop-types";

const Icon = props => {
  const { icon, className } = props;
  return (
    <svg className={className} width="25" height="27" viewBox="0 0 24 24">
      <path d={icon} />
    </svg>
  );
};

Icon.propTypes = {
  props: PropTypes.object
};

export default Icon;
