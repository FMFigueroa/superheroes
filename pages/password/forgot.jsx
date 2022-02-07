import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

import ForgotPassword from '../../components/user/ForgotPassword'


const ForgotPasswordPage = () => {
    return (
        <div>
            <Head>
                <title>Password Recovery</title>
                <meta name="description" content="Recovery of your account in this Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ForgotPassword />

            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/password/forgot">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </div>
    )
}

export default ForgotPasswordPage
