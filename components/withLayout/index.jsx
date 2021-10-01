import React from "react";
import Head from "next/head";
import Header from "../Header";

const withLayoutAuth = Component => () => {
    return (
        <>
            <Head>
                <title>Leaf App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Header />
            <Component />
        </>
    );
};

export default withLayoutAuth;