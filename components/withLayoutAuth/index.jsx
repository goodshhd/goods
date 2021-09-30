import React from "react";
import Head from "next/head";

const withLayoutAuth = Component => () => {
    return (
        <>
            <Head>
                <title>Leaf App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Component />
        </>
    );
};

export default withLayoutAuth;