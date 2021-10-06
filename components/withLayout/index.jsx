import React, {useEffect} from 'react';

import Head from 'next/head';
import Header from '../Header';

import {useRecoilState} from 'recoil';
import {useSession} from 'next-auth/client';

import PropTypes from 'prop-types';
import {headerTabsState, userData} from '../../recoil/atoms';

const withLayout = Component => () => {

    const session = useSession();
    const [,setUser] = useRecoilState(userData);
    const [,setSessionData] = useRecoilState(headerTabsState);

    const sessionUser = session[0].user;

    useEffect(() => {
        setSessionData(
            [
                {
                    link: `/${sessionUser.email}/workboard`,
                    title: 'Workboard'
                },
                {
                    link: '#',
                    title: 'Team'
                },
                {
                    link: '#',
                    title: 'Projects'
                },
                {
                    link: '#',
                    title: 'Calendar'
                },
                {
                    link: '#',
                    title: 'Reports'
                },
            ]
        );

        setUser(sessionUser);

    }, []);

    return (
        <>
            <Head>
                <title>Leaf App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Header />
            {<Component /> || Component.name || Component.displayName}
        </>
    );
};

export default withLayout;

withLayout.propTypes = {
    Component: PropTypes.element
};