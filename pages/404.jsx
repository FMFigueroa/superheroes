import NotFound from '../components/layout/NotFound'
import Layout from '../components/layout/Layout'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found' >
            <NotFound />
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>
    )
}