import React from 'react';
import PropTypes from 'prop-types';

const Input = ({placeholder, label}) => {
    return (
        <div>
            <label className='text-sm font-medium text-gray-700'>{label}</label>
            <div className='mt-1 relative rounded-md shadow-sm' >
                <input type='text' className='focus:ring-yellow-500 placeholder-gray-300 focus:border-yellow-500 w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md' placeholder={placeholder || 'Default Placeholder'} />
            </div>
        </div>
    );
};

export default Input;

Input.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
};

Input.defaultProps = {
    placeholder: '',
    label: ''
};


