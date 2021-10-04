import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const SmallButton = ({handleClick, icon, color}) => (
    <div>
        <button type='button'
                className={`p-2 max-w-xs ${color} rounded-md flex items-center text-sm`}
                 onClick={handleClick}>
            <span className='sr-only'>Open user menu</span>
            <Image className='h-8 w-8'
                   src={icon}
                   alt='setting'/>
        </button>
    </div>
);

export default SmallButton;

SmallButton.propTypes = {
    handleShowDropDown: PropTypes.func,
    icon: PropTypes.object
};

SmallButton.defaultProps = {
    handleClick: () => {},
    icon: {}
};