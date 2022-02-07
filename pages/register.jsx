import Register from '../components/auth/Register'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

export default function RegisterPage() {
    return (
        <div>
            <Head>
                <title>SignUp | SuperHeroes</title>
                <meta name="description" content="SignUp to your account in SuperHeroes Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Register />

            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/register">
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