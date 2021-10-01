import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import PropTypes from 'prop-types';

const withLayout = Component => () => {
    return (
        <>
            <Head>
                <title>Leaf App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Header />
            {<Component/> || Component.name || Component.displayName}
        </>
    );
};

export default withLayout;

withLayout.propTypes = {
    Component: PropTypes.element
};