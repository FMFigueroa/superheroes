import Layout from '../../components/layout/Layout';
import styles from './FAQs.module.css';
import Script from 'next/script';


function FAQs() {
    return (
        <Layout
            title="SuperHeores | FAQs"
            description="this is the FAQs of the website">
            <h1 className={styles.container}>FAQs</h1>
        </Layout>

    );
}

export default FAQs;