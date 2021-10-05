import React from 'react';

import Tab from '../Tab';

import {useRouter} from 'next/router';

import PropTypes from "prop-types";

const Nav = ({tabsData}) => {
    const {asPath} = useRouter();

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

Nav.propTypes = {
    tabsData: PropTypes.array
};

Nav.defaultProps = {
    tabsData: []
};