import Layout from '../../components/layout/Layout';
import styles from './FAQs.module.css';
import Link from 'next/link';


function FAQs() {
    return (
        <Layout
            title="WebSite | FAQs"
            description="this is the FAQs of the website">
            <div className={styles.container}>FAQs</div>
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/faqs">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>

    );
}

export default FAQs;