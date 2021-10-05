import React from 'react';

import {getSession} from 'next-auth/client';

import Filter from '../../../components/Filter';
import withLayout from '../../../components/withLayout';

const Workboard = () => {
    return (
        <section>
            <header className='bg-white shadow'>
                <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold text-gray-900'>
                        Workboard
                    </h1>
                </div>
            </header>
            <main>
                <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                    <div className='px-4 py-6 sm:px-0'>
                        <Filter />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default withLayout(Workboard);

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: '/signIn'
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
    };
}