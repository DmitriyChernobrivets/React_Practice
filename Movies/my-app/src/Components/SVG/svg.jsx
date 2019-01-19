import React from "react";
// const { PropTypes } = React;

const Icon = props => {
  const { icon, className } = props;
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d={icon} />
    </svg>
  );
};

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired
// };

export default Icon;
