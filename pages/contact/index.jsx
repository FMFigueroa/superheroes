import Layout from '../../components/layout/Layout';
import styles from './Contact.module.css';
import Link from 'next/link';


function Conatact() {
    return (
        <Layout
            title="WebSite | Contact"
            description="this is the Contact of the website">
            <div className={styles.container}>Contact</div>
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/contact">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>

    );
}

export default Conatact;