import React, {useEffect} from 'react';

import Head from 'next/head';
import Header from '../Header';

import {useRecoilState} from 'recoil';
import {session, useSession} from 'next-auth/client';

import PropTypes from 'prop-types';
import {headerTabsState, userData} from '../../recoil/atoms';

const withLayout = Component => () => {

    const session = useSession();
    const [user,setUser] = useRecoilState(userData);
    const [sessionData, setSessionData] = useRecoilState(headerTabsState);

    const userEmail = session[0].user.email;

    useEffect(() => {
        setSessionData((oldData) =>
            [
                ...oldData,
                {
                    link: `/${userEmail}/workboard`,
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
    }, [userEmail]);

    useEffect(() => {
        setUser(session[0].user);
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