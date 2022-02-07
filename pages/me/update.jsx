import React from 'react'
import { getSession } from 'next-auth/react'

import Profile from '../../components/user/Profile'
import Layout from '../../components/layout/Layout'
import Link from 'next/link';

const UpdateProfilePage = () => {
    return (
        <Layout title='Update Profile'>
            <Profile />
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/me/update">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }

}

export default UpdateProfilePage
