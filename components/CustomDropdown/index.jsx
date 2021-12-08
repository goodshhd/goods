import React, { memo } from "react";

import PropTypes from "prop-types";

const CustomDropdown = ({ toggle, listData }) => {
  const renderDropdownList = (item, i) => (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      onClick={item.handler}
      key={`${item.title}-${i}`}
    >
      {item.title}
    </a>
  );
  return (
    <div
        role="customDropDown"
      className={`${
        toggle ? "opacity-100" : "opacity-0"
      } origin-top-right absolute top-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-300`}
    >
      {listData.map(renderDropdownList)}
    </div>
  );
};

export default memo(CustomDropdown);

CustomDropdown.propType = {
  toggle: PropTypes.func,
  listData: PropTypes.array,
};

CustomDropdown.defaultProps = {
  toggle: () => {},
  listData: [],
};
