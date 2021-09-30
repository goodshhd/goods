import Head from "next/head";
import {getSession} from "next-auth/client";

const StartingPage = () => {
    return (
        <Head>
            <title>Leaf App</title>
            <link rel='icon' href='../public/favicon.ico'/>
        </Head>
    )
}

export default StartingPage

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