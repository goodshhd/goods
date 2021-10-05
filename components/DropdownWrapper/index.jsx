import React from 'react';

import PropTypes from 'prop-types';

const DropdownWrapper = ({ children, toggle }) => {
    return (
        <>
            {
                toggle ? (
                    children
                ) : null
            }
        </>
    );
};

export default DropdownWrapper;

DropdownWrapper.propType = {
    toggle: PropTypes.func,
    children: PropTypes.any
};

DropdownWrapper.defaultProps = {
    children: <></>,
    toggle: () => {}
};