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
    children: PropTypes.any,
    toggle: PropTypes.func
};

DropdownWrapper.defaultProps = {
    children: <></>,
    toggle: () => {}
};