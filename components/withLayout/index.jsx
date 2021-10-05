import React, {useEffect} from 'react';
import Head from 'next/head';
import Header from '../Header';
import PropTypes from 'prop-types';
import {useRecoilState} from "recoil";
import {userData} from "../../recoil/atoms";
import {useSession} from "next-auth/client";

const withLayout = Component => () => {
    const session = useSession();
    const [user, setUser] = useRecoilState(userData);

    useEffect(() => {
        setUser(session[0].user);
    }, []);

    return (
        <>
            <Head>
                <title>Leaf App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Header user={user}/>
            {<Component /> || Component.name || Component.displayName}
        </>
    );
};

export default withLayout;

withLayout.propTypes = {
    Component: PropTypes.element
};