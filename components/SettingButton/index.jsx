import React from 'react';
import Image from 'next/image';
import settingIcon from '../../public/icon/setting-icon.svg';
import PropTypes from 'prop-types';

const SettingButton = ({handleShowDropDown}) => (
    <div>
        <button type='button'
                className='p-2 max-w-xs bg-yellow-600 rounded-md flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                 onClick={handleShowDropDown}>
            <span className='sr-only'>Open user menu</span>
            <Image className='h-8 w-8'
                   src={settingIcon}
                   alt='setting'/>
        </button>
    </div>
);

export default SettingButton;

SettingButton.propTypes = {
    handleShowDropDown: PropTypes.func
};