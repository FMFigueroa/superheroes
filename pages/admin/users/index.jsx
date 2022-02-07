import { getSession } from 'next-auth/react'
import AllUsers from '../../../components/admin/AllUsers'
import Layout from '../../../components/layout/Layout'
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import Link from 'next/link';


const AllUsersPage = () => {
    const { success, message } = useSelector(state => state.user)

    //Update profile Success
    useEffect(() => {
        if (success) {
            (toast.success(message))
        }
    }, [success, message])


    return (
        <Layout title='All Users'>
            <AllUsers />
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/admin/users">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session || session._id.role !== 'admin') {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }

}

export default AllUsersPage
