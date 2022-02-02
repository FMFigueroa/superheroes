import Layout from '../../components/layout/Layout';
import styles from './Projects.module.css';
import Script from 'next/script';


function Projects() {
    return (
        <Layout
            title="SuperHeores | Projects"
            description="this is the Projects of the website">
            <h1 className={styles.container}>Projects</h1>
        </Layout>

    );
}

export default Projects;