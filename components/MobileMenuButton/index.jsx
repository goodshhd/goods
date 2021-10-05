import React from 'react';

import PropTypes from 'prop-types';

const MobileMenuButton = ({handleMobileMenu}) => (
    <button type='button'
            className='bg-yellow-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' onClick={handleMobileMenu}>
        <span className='sr-only'>Open main menu</span>
        <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none'
             viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'/>
        </svg>
        <svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none'
             viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'/>
        </svg>
    </button>
);

export default MobileMenuButton;

MobileMenuButton.propType = {
    handleMobileMenu: PropTypes.func
};

MobileMenuButton.defaultProps = {
    handleMobileMenu: () => {}
};