import Layout from '../../components/layout/Layout';
import styles from './Contact.module.css';
import Script from 'next/script';


function Conatact() {
    return (
        <Layout
            title="SuperHeores | Conatact"
            description="this is the Conatact of the website">
            <h1 className={styles.container}>Conatact</h1>
        </Layout>

    );
}

export default Conatact;