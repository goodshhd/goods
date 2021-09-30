import React from "react";
import {getSession} from "next-auth/client";
import withLayout from '../../../components/withLayoutAuth';

const Workboard = () => {
    return (
        <section>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"/>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default withLayout(Workboard);

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: `/signIn`
            },
            props: {
                session
            }
        };
    }

    return {
        props: {
            session
        }
    }
}