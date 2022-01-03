import React from "react";

import PropTypes from "prop-types";
import InlineSvg from "../InlineSvg";

const SmallButton = ({ handleClick, icon, color }) => (
  <button
    type="button"
    className={`p-2 max-w-xs ${color} rounded-md flex items-center text-sm`}
    onClick={handleClick}
    role="small-button"
  >
    <span className="sr-only">Open user menu</span>
    <InlineSvg svg={icon} />
  </button>
);

export default SmallButton;

SmallButton.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  handleShowDropDown: PropTypes.func,
};

SmallButton.defaultProps = {
  icon: "",
  color: "",
  handleClick: () => {},
};
