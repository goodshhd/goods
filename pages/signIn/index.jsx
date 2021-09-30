import React from "react";
import { signIn, getSession } from "next-auth/client";
import Image from "next/image";
import logo from '/Users/robertkulik/My-Projects/goods/public/static/images/logo-regular.png';


const SignIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="flex w-full items-center justify-center" >
                        <Image src={logo} height={100} width={100} alt='leaf-logo' />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div>
                    <button onClick={signIn} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
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