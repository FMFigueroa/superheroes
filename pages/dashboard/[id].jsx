import styles from "../../styles/Details.module.css";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { heroDefault } from "../../db/reviewHero";
import ReviewHero from "../../components/team/ReviewHero";


export default function DetailsView() {
    const [heroViewState, setHeroViewState] = useState(heroDefault);
    const { hero, success, message, error } = useSelector((state) => state.reviewHero);
    const router = useRouter();

    //Results from the API Superheroe for the details view
    useEffect(() => {
        success
            ? (setHeroViewState(hero), (toast.success(message)))
            : (setHeroViewState(heroDefault), (toast.error(message)), (toast.error(error)))
    }, [success, message, error]);


    return (
        <Layout title="Dashboard | Team" description="this is the View">
            <div className={styles.container}>
                <div className="container">
                    <div className="container my-3">
                        <h1 className={styles.title}>Details View</h1>
                        <button
                            type="button"
                            className="btn btn-primary py-1 px-4"
                            onClick={() => router.push("/")}
                        >
                            <i className="ri-home-4-line"></i>
                        </button>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="card text-center">

                                {heroViewState && heroViewState.map((hero, index) => (
                                    <div className="card-header card__face--front" key={index}>
                                        <h2 className="card-title">
                                            {hero.biography[0].alignment === "good" ? (
                                                <div>
                                                    <span className={styles.heroName}>{hero.name}</span>{" "}
                                                    is a Superhero
                                                </div>
                                            ) : (
                                                <div>
                                                    <span className={styles.heroName}>{hero.name}</span>{" "}
                                                    is a Villain
                                                </div>
                                            )}
                                        </h2>
                                    </div>
                                ))}

                                <div className="card-body card__face--front">
                                    <div className={styles.card__container}>
                                        {heroViewState &&
                                            heroViewState.map((hero, index) => (
                                                <ReviewHero
                                                    key={index}
                                                    hero={hero} />
                                            ))}

                                    </div>

                                    {/* ======================  Card 3  ======================== */}

                                    <div>
                                        <div className="container my-3 mt-5">
                                            <h3>GoBack to Team</h3>
                                            <button
                                                className="btn btn-primary mx-3 mb-3"
                                                type="button"
                                                onClick={() => router.back()}
                                            >
                                                GoBack
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-muted card__face--front">SuperHeroes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <=============== SCROLL UP ===============--> */}
            <Link href="/dashboard">
                <a className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-fill scrollup__icon"></i>
                </a>
            </Link>
        </Layout>
    );
}