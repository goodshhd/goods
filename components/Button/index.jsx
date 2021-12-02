import React from 'react';

import PropTypes from 'prop-types';

const Button = ({onClick,buttonText}) => (
    <button role='button' onClick={onClick} className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
        {buttonText}
    </button>
);

export default Button;

Button.propType = {
    onClick: PropTypes.func,
    buttonText: PropTypes.string
};

Button.defaultProps = {
    buttonText: '',
    onClick: () => {}
};