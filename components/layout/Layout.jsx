import Head from "next/head";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script';

const Layout = ({ children, title, description }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                <ToastContainer position="bottom-right" />
                {children}
            </main>
            <Footer />

            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>

            {/* <=============== MAIN JS ===============--> */}
            <Script type="text/javascript" src="/assets/js/main.js" />
        </div>
    );
}

export default Layout;

Layout.defaultProps = {
    title: "WebSite | V1.0 ",
    description: "this is the default description of the website",
};