import React from "react";

import Image from "next/image";

import PropTypes from "prop-types";

import logo from "../../public/images/logo-goods-white.svg";

const Logo = ({ width = 0, height = 0 }) => (
  <div className="flex-shrink-0">
    <Image height={height} width={width} src={logo} alt="Workflow" />
  </div>
);

export default Logo;

Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};

Logo.defaultProps = {
    width: 0,
    height: 0
};