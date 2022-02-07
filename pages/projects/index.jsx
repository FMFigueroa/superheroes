import Layout from '../../components/layout/Layout';
import styles from './Projects.module.css';
import Link from 'next/link';


function Projects() {
    return (
        <Layout
            title="WebSite | Projects"
            description="this is the Projects of the website">
            <div className={styles.container}>Projects</div>
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/projects">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>
    );
}

export default Projects;