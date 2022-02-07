import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="footer section" id="contact">
            <div className="footer__container containerGlobal grid">
                <div className="footer__content">
                    <Link href="/">
                        <a className="footer__logo">
                            <i className="ri-bubble-chart-fill nav__logo-icon"></i> Felix Figueroa
                        </a>
                    </Link>
                    <h3 className="footer__title">
                        Subscribe to our newsletter <br />
                        to stay update
                    </h3>

                    <div className="footer__subscribe">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer__input"
                        />

                        <button className="button button--flex footer__button">
                            Subscribe
                            <i className="ri-arrow-right-up-line button__icon"></i>
                        </button>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Country</h3>

                    <ul className="footer__data">
                        <li className="footer__information">
                            <i className="ri-map-pin-line footer__country-link"></i>Argentina.
                        </li>
                        <li className="footer__information">
                            <i className="ri-building-2-line footer__country-link"></i>Buenos Aires.

                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Contact Me</h3>

                    <ul className="footer__data">
                        <li className="footer__information">
                            <i className="ri-mail-send-line footer__contact-link"></i> felixmanuelfigueroa@gmail.com
                        </li>
                        <li className="footer__information">
                            <i className="ri-phone-line footer__contact-link"></i> +54 911 33851987
                        </li>

                        <div className="footer__social">
                            <Link href="https://www.linkedin.com/in/felix-manuel-figueroa-3b91551b/">
                                <a
                                    className="footer__social-link"
                                >
                                    <i className="ri-linkedin-box-fill"></i>
                                </a>
                            </Link>
                            <Link href="https://github.com/FMFigueroa">
                                <a
                                    className="footer__social-link"
                                >
                                    <i className="ri-github-fill"></i>
                                </a>

                            </Link>

                            <Link href="https://twitter.com/FelixM_Figueroa">
                                <a
                                    className="footer__social-link"
                                >
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </Link>

                        </div>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Payments</h3>

                    <div className="footer__payments">
                        <Link href="/">
                            <a className="footer__payments-link">
                                <Image src="/assets/img/pay_1.png" alt="" className="footer__payments" width={35} height={35} />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="footer__payments-link">
                                <Image src="/assets/img/pay_2.png" alt="" className="footer__payments" width={35} height={35} />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="footer__payments-link">
                                <Image src="/assets/img/pay_3.png" alt="" className="footer__payments" width={35} height={35} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <p className="footer__copy">
                Copyright &#169; Felix Figueroa. All Rights Reserved.
            </p>
        </footer >
    );
}

export default Footer;