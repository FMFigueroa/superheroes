import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/actions/userActions';
import { signOut } from 'next-auth/react';

const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const { loading, user, isAuthenticated } = useSelector(state => state.loadedUser)

    useEffect(() => {
        if (!user) {
            dispatch(loadUser())
        }
    }, [dispatch, user])

    /* =====================      SignOut     ===================== */
    const logoutHandler = () => {
        signOut()

    }
    /* ============================================================= */

    const dashboardLink = (
        <>
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
        </>
    )
    /* ============================================================= */
    const accessLinks = (
        <>
            <div className="d-flex flex-wrap justify-content-between gap-4 nav__menu">
                <Link href="/login">
                    <button type="button" className="btn__login">
                        Login
                    </button>
                </Link>
                <Link href="/register">
                    <a className="btn__register" type="button">
                        Register
                    </a>
                </Link>
            </div>
        </>
    )
    /* ============================================================= */

    const menuProfileMobile = (
        <>
            <div className="container__profile__mobile">
                <figure className="avatar">
                    <img
                        src={user && user.avatar && user.avatar.url}
                        alt={user && user.name}
                        className="rounded-circle"
                    />
                </figure>
                <div className="btn-group ">
                    <a type="button" className="btn dropdown-toggle user__name" data-bs-toggle="dropdown" aria-expanded="false">

                        Hi, {user && user.first_name} {" "}</a>

                    <ul className="dropdown-menu user__menu">
                        {user && user.role === 'admin' && (
                            <>
                                <Link href='/admin/users'>
                                    <a className="dropdown-item"><i className="ri-admin-line me-2"></i>Users</a>
                                </Link>
                                <hr />

                            </>
                        )}
                        <Link href='/me/update'>
                            <a className="dropdown-item"><i className="ri-user-settings-line me-2"></i>Profile</a>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link href='/'>
                            <a className="dropdown-item" onClick={logoutHandler}><i className="ri-logout-box-line me-2"></i>Logout</a>
                        </Link>
                    </ul>
                </div >
            </div>
            <hr className="container__profile__mobile me-5" />
        </>
    )
    /* ============================================================= */
    const accessLinksMobile = (
        <div className="container__profile__mobile">
            <hr className="w-75" />
            <div className="d-flex flex-column w-50 gap-1 ms-4">

                <Link href="/register">
                    <a className="btn__register" type="button">
                        Register
                    </a>
                </Link>
                <i className="align-self-center">or</i>
                <Link href="/login">
                    <button type="button" className="btn__login">
                        Login
                    </button>
                </Link>

            </div>
        </div>
    )


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
                    {/* ================= menuProfileMobile =============== */}
                    {isAuthenticated && menuProfileMobile}
                    {/* ==================================================== */}
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
                        {isAuthenticated ? dashboardLink : null}
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
                    {/* ================= accessLinksMobile =============== */}
                    {!isAuthenticated && accessLinksMobile}
                    {/* ==================================================== */}
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                {/* ===================================== */}
                {user ? (
                    <div className="container__profile nav__menu">
                        <figure className="avatar">
                            <img
                                src={user && user.avatar && user.avatar.url}
                                alt={user && user.name}
                                className="rounded-circle"
                            />
                        </figure>
                        <div className="btn-group ">
                            <a type="button" className="btn dropdown-toggle user__name" data-bs-toggle="dropdown" aria-expanded="false">

                                Hi, {user && user.first_name} {" "}</a>

                            <ul className="dropdown-menu user__menu">
                                {user && user.role === 'admin' && (
                                    <>
                                        <Link href='/admin/users'>
                                            <a className="dropdown-item"><i className="ri-admin-line me-2"></i>Users</a>
                                        </Link>
                                        <hr />

                                    </>
                                )}
                                <Link href='/me/update'>
                                    <a className="dropdown-item"><i className="ri-user-settings-line me-2"></i>Profile</a>
                                </Link>
                                <hr className="dropdown-divider" />
                                <Link href='/'>
                                    <a className="dropdown-item" onClick={logoutHandler}><i className="ri-logout-box-line me-2"></i>Logout</a>
                                </Link>
                            </ul>
                        </div >
                    </div>
                ) :
                    (!loading && accessLinks)
                }
                {/* ===================================== */}
                <div className="nav__btns">
                    {/* <!-- Theme change buttom --> */}
                    <i className="ri-moon-clear-line change-theme" id="theme-button"></i>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-menu-line"></i>
                    </div>
                </div>
                {/* ===================================== */}
            </nav>
        </header>
    );
};

export default Navbar;
