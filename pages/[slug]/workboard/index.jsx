import React from 'react';

import {getSession} from 'next-auth/client';

import Filter from '../../../components/Filter';
import withLayout from '../../../components/withLayout';
import {useRecoilValue} from 'recoil';
import {filterTableData} from '../../../recoil/selectors';

const Workboard = () => {
    const _filterTableData = useRecoilValue(filterTableData);

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
            <div>
                {_filterTableData.map((data, i) => (
                    <ul key={`${i}-${data.userId}`}>
                        <li>{data.code}</li>
                        <li>{data.company}</li>
                        <li>{data.title}</li>
                    </ul>
                ))}

            </div>
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