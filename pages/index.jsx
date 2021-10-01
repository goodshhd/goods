import React from 'react';
import Head from 'next/head';
import {getSession} from 'next-auth/client';

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
    let destination = '/signIn';

    if (session) {
        destination = `/${session.user.email}/workboard`;
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