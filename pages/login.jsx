import Login from '../components/auth/Login'
import { getSession } from 'next-auth/react'
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify'

export default function LoginPage() {
    const { success, message } = useSelector(state => state.auth) //Redux state
    const successNewPassword = useSelector(state => state.resetPassword.success)
    const messageNewPassword = useSelector(state => state.resetPassword.message)


    //Register Success
    useEffect(() => {
        if (success) {
            (toast.success(message))
        }
    }, [success, message])

    //New Password
    useEffect(() => {
        if (successNewPassword) {
            (toast.success(messageNewPassword))
        }
    }, [successNewPassword, messageNewPassword])

    return (
        <div>
            <Head>
                <title>Login | SuperHeroes</title>
                <meta name="description" content="LogIn to your account in SuperHeroes Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Login />
            <ToastContainer position="bottom-right" />

            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/login">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </div>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (session) {
        return {
            redirect: {
                destination: '/', // Redirect to the home page
                permanent: false
            }
        }
    }

    return {
        props: {}
    }

}
