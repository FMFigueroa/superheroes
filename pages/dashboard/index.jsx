import Layout from '../../components/layout/Layout';
import styles from './Dashboard.module.css';


function Dashboard() {
    return (
        <Layout
            title="SuperHeores | Dashboard"
            description="this is the Dashboard of the website">
            <h1 className={styles.container}>Dashboard</h1>
        </Layout>
    );
}

export default Dashboard;