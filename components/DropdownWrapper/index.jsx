import React from "react";

const DropdownWrapper = ({ children, toggle }) => {
    return (
        <>
            {
                toggle ? (
                    children
                ) : null
            }
        </>
    )
}

export default DropdownWrapper;