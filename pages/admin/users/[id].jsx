import React from 'react'
import { getSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import UpdateUser from '../../../components/admin/UpdateUser'
import Layout from '../../../components/layout/Layout'
import Link from 'next/link';

const UpdateUserPage = () => {
    const { user } = useSelector(state => state.userDetails)
    return (
        <Layout title='Update User'>
            <UpdateUser />
            {/* <=============== SCROLL UP ===============--> */}
            <Link href={`/admin/users/${user._id}`}>
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

export default UpdateUserPage
