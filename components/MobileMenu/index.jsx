import React from 'react';

import Tab from '../Tab';

import {useRouter} from 'next/router';
import {useRecoilValue} from 'recoil';

import PropTypes from 'prop-types';

import {headerTabsState, mobileTabsState, userData} from "../../recoil/atoms";

const MobileMenu = () => {
    const {asPath} = useRouter();
    const user = useRecoilValue(userData);
    const mobileTabsData = useRecoilValue(mobileTabsState);
    const menuTabs = useRecoilValue(headerTabsState);

    const renderItems = (tab, i) => (
        <Tab
            link={tab.link}
            title={tab.title}
            pathName={asPath}
            key={`${i}+${tab.link}`}
            onClick={tab.action ? tab.action : null}
        />
    );

    return (
        <>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-md'>
                {menuTabs.map(renderItems)}
            </div>
            <div className='pt-4 pb-3 border-t border-white'>
                <div className='flex items-center px-5'>
                    <div className='bg-yellow-600 w-full p-2 rounded-md'>
                        <div className='text-base font-medium leading-none text-white'>Some User</div>
                        <div className='text-sm font-medium leading-none text-white mt-2'>{user.email || user.name || 'Default Value'}</div>
                    </div>
                </div>
                <div className='mt-3 px-2 space-y-1 flex flex-col text-md'>
                    {mobileTabsData.map(renderItems)}
                </div>
            </div>
        </>
    );
};

export default MobileMenu;

MobileMenu.propType = {
    user: PropTypes.object,
    menuTabs: PropTypes.array,
    settingsTabs: PropTypes.array
};

MobileMenu.defaultProps = {
    user: {},
    menuTabs: [],
    settingsTabs: []
};