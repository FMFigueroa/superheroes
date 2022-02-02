import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <header className="header" id="header">
            <nav className="nav">
                <Link href="/">
                    <a className="nav__logo">
                        <i className="ri-bubble-chart-fill nav__logo-icon"></i> Felix
                        Figueroa
                    </a>
                </Link>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link href="/">
                                {router.pathname === "/" ? (
                                    <a className="active-link">
                                        {" "}
                                        <i className="ri-home-4-fill nav__menu__icon"></i>Home
                                    </a>
                                ) : (
                                    <a className="nav__link">
                                        {" "}
                                        <i className="ri-home-4-line nav__menu__icon"></i>Home
                                    </a>
                                )}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/dashboard">
                                {router.pathname === "/dashboard" ? (
                                    <a className="active-link">
                                        {" "}
                                        <i className="ri-dashboard-2-fill nav__menu__icon"></i>Dashboard
                                    </a>
                                ) : (
                                    <a className="nav__link">
                                        {" "}
                                        <i className="ri-dashboard-2-line nav__menu__icon"></i>Dashboard
                                    </a>
                                )}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/projects">
                                {router.pathname === "/projects" ? (
                                    <a className="active-link">
                                        {" "}
                                        <i className="ri-book-mark-fill nav__menu__icon"></i>Projects
                                    </a>
                                ) : (
                                    <a className="nav__link">
                                        {" "}
                                        <i className="ri-book-mark-line nav__menu__icon"></i>Projects
                                    </a>
                                )}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/faqs">
                                {router.pathname === "/faqs" ? (
                                    <a className="active-link">
                                        {" "}
                                        <i className="ri-questionnaire-fill nav__menu__icon"></i>FAQs
                                    </a>
                                ) : (
                                    <a className="nav__link">
                                        {" "}
                                        <i className="ri-questionnaire-line nav__menu__icon"></i>FAQs
                                    </a>
                                )}
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/contact">
                                {router.pathname === "/contact" ? (
                                    <a className="active-link">
                                        {" "}
                                        <i className="ri-contacts-fill nav__menu__icon"></i>Contact
                                    </a>
                                ) : (
                                    <a className="nav__link">
                                        {" "}
                                        <i className="ri-contacts-line nav__menu__icon"></i>Contact
                                    </a>
                                )}
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>
                <div className="nav__btns">
                    {/* <!-- Theme change buttom --> */}
                    <i className="ri-moon-clear-line change-theme" id="theme-button"></i>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-menu-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
