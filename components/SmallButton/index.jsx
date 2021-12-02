import React from "react";

import Image from "next/image";

import PropTypes from "prop-types";

const SmallButton = ({ handleClick, icon, color }) => (
  <button
    type="button"
    className={`p-2 max-w-xs ${color} rounded-md flex items-center text-sm`}
    onClick={handleClick}
  >
    <span className="sr-only">Open user menu</span>
    <Image width={24} height={24} src={icon} alt="setting" />
  </button>
);

export default SmallButton;

SmallButton.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string,
  handleShowDropDown: PropTypes.func,
};

SmallButton.defaultProps = {
  icon: {},
  color: "",
  handleClick: () => {},
};
