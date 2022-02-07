import Layout from '../../components/layout/Layout';
import styles from './Dashboard.module.css';
import { getSession } from 'next-auth/react'
import React, { useEffect } from 'react';
import Link from 'next/link';


function Dashboard() {

    return (
        <Layout
            title="WebSite | Dashboard"
            description="this is the Dashboard of the website">
            <div className={styles.container}>Dashboard</div>
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/dashboard">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>
    );
}

export default Dashboard;

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