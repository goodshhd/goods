import React from 'react';

import {getSession} from 'next-auth/client';

import Head from 'next/head';
import useEmailCutter from "../utils/hooks/useEmailCutter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
    const {email} = useEmailCutter(session.user.email);

    let destination = '/signIn';

    if (session) {
        destination = `/${email}/workboard`;
    }

    return {
        redirect: {
            destination,
            permanent: false
        },
        props: {
            ...(await serverSideTranslations(context.locale, ['common'])),
            session,
        }
    };
}