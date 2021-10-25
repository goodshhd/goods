import React from 'react';

import {getSession} from 'next-auth/client';

import Head from 'next/head';

const Home = () => {
    return (
        <Head>
            <title>Leaf App</title>
            <link rel='icon' href='../public/favicon.ico'/>
        </Head>
    );
};

export default Home;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const email = session.user.email;

    const useName = email.substring(0, email.lastIndexOf('@'));

    let destination = '/signIn';

    if (session) {
        destination = `/${useName}/workboard`;
    }

    return {
        redirect: {
            destination,
            permanent: false
        },
        props: {
            session
        }
    };
}