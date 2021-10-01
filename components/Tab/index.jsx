import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const select = 'bg-yellow-600 text-white px-3 py-2 rounded-md font-medium';
const regular = 'text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md font-medium';

const Tab = ({link, title, pathName, onClick}) => (
    <Link href={link}>
        <a className={pathName === link ? select : regular} onClick={onClick}>{title}</a>
    </Link>
);

export default Tab;

Tab.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    pathName: PropTypes.string,
    onClick: PropTypes.func
};

Tab.defaultProps = {
    link: '',
    title: '',
    pathName: '',
    onClick: () => {}
};