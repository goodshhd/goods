import React from 'react';

import Tab from '../Tab';

import {useRouter} from 'next/router';

import {useRecoilValue} from 'recoil';
import {headerTabsState} from '../../recoil/atoms';

const Nav = () => {
    const {asPath} = useRouter();
    const tabsData = useRecoilValue(headerTabsState);

    const renderItems = (tab, i) => (
        <Tab
            link={tab.link}
            title={tab.title}
            pathName={asPath}
            key={`${i}+${tab.link}`}
        />
    );

    return (
        <div className='ml-10 flex items-baseline space-x-4'>
            {tabsData.map(renderItems)}
        </div>
    );
};

export default Nav;