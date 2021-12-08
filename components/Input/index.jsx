import React from 'react';

import PropTypes from 'prop-types';

const Input = ({placeholder, label, onChange, value, type, name}) => {
    return (
        <div role="input">
            <label className='text-sm font-medium text-gray-700'>{label || 'Default Input'}</label>
            <div className='mt-1 relative rounded-md shadow-sm'>
                <input
                    name={name}
                    type={type}
                    value={value ? value : ''}
                    onChange={onChange}
                    placeholder={placeholder || 'Default Placeholder'}
                    className='focus:ring-yellow-500 placeholder-gray-300 focus:border-yellow-500 w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md'
                />
            </div>
        </div>
    );
};

export default Input;

Input.propTypes = {
    value: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    type: '',
    name: '',
    value: '',
    label: '',
    placeholder: '',
    onChange: () => {}
};


