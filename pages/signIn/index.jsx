import React from "react";
import { signIn, getSession } from "next-auth/client";
import Image from "next/image";
import arrowDown from '../../public/icon/arrow-down.svg';
import logoWhite from '../../public/images/logo-goods-white.svg';
import Button from "../../components/Button";
import Head from "next/head";


const SignIn = () => {
    return (
        <>
            <Head>
                <title>Leaf App</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <div className='flex'>
                <div style={{background: "url('../../images/sign-in-bg.png')"}} className='hidden w-1/2 bg-no-repeat bg-cover min-h-screen md:flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={logoWhite}/>
                        <div className='mt-8'>
                            <h2 className="text-center text-6xl font-extrabold text-white font-bold">
                                Welcome to
                            </h2>
                            <h2 className="text-center text-6xl font-extrabold text-white font-bold">
                                Goods
                            </h2>
                        </div>
                        <span className='text-white font-normal text-md mt-4 w-96 text-center'>
                        the place where you can organize your productivity and managing data from business
                    </span>
                    </div>
                </div>
                <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-full md:w-1/2">
                    <div className="max-w-md w-full space-y-8 items-center justify-center flex flex-col">
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 w-48">
                                Sign in to your account
                            </h2>
                            <Image src={arrowDown} />
                        </div>
                        <div className='w-48'>
                            <Button onClick={signIn} buttonText='Sign in' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (session) {
        return {
            redirect: {
                permanent: false,
                destination: `/${session.user.email}/workboard`
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