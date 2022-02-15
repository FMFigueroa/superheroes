import Layout from '../../components/layout/Layout';
import styles from '../../styles/Dashboard.module.css';
import Image from "next/image";
import { getSession } from 'next-auth/react'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import PowerStats from "../../components/team/PowerStats";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import { getHeros } from "../../redux/actions/heroActions";
import { toast } from "react-toastify";
import HeroTeam from "../../components/team/HeroTeam";


function Dashboard() {
    const { isAuthenticated, message } = useSelector(state => state.loadedUser)
    const herosTeam = useSelector((state) => state.allHeros.herosTeam);
    const { success, error } = useSelector((state) => state.deleteHero)
    const messageDel = useSelector((state) => state.deleteHero.message)
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuthenticated) {
            //const user_id = user._id;
            //console.log(user_id)
            dispatch(getHeros()); // get all heros, need to associate them with the user. 
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated) {
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }, []);


    useEffect(() => {
        success === true ? (toast.success(messageDel)) : (toast.error(error));
    }, [success, messageDel, error]);

    // Select between Heroes and Villains
    const superheroes = herosTeam.filter((hero) => hero.biography[0].alignment === "good");
    const villain = herosTeam.filter((hero) => hero.biography[0].alignment === "bad");


    // AVG Team Height
    function avgTeamHeight() {
        let SelectHeight = herosTeam.map((hero) => hero.appearance[0].height[1]);
        let Height = SelectHeight.map((height) => height.replace(" cm", ""));
        let sumaHeight = 0;
        for (var i = 0; i < Height.length; i++) {
            (sumaHeight += parseInt(Height[i]) / Height.length);
        }
        return sumaHeight;
    }


    // AVG Team Weight
    function avgTeamWeight() {
        let SelectWeight = herosTeam.map((hero) => hero.appearance[0].weight[1]);
        let Weight = SelectWeight.map((weight) => weight.replace(" kg", ""));
        let sumaWeight = 0;
        for (var i = 0; i < Weight.length; i++) {
            (sumaWeight += parseInt(Weight[i]) / Weight.length);
        }
        return sumaWeight;
    }

    return (
        <Layout
            title="WebSite | Dashboard"
            description="this is the Dashboard of the website">
            <div className={styles.container}>
                <div className="container mt-3">
                    <div className="container my-3">
                        <h2 className={styles.title}>Dream Team</h2>
                        <button
                            type="button"
                            className="btn btn-primary py-1 px-4"
                            onClick={() => router.push("/")}
                        >
                            <i className="ri-home-4-line"></i>
                        </button>
                    </div>
                    <div className="row">
                        <div className="container my-3 py-3" style={{ boxShadow: "0px 0px 8px 3px rgba(0, 0, 0, 0.3)", borderRadius: "5px" }}>
                            <div className="card text-center"  >
                                <div className="card-header card__face--front " style={{ backgroundColor: "var(--first-color)" }}>
                                    <h3 className="card-title " style={{ color: "#fff" }}>Super Team </h3>
                                </div>
                                <div className="card-body card__face--front">
                                    <div className={styles.card__container}>
                                        <div className={styles.card__image}>
                                            <div className="my-5">
                                                <Image
                                                    src="/assets/img/logo_team.png"
                                                    alt="perfil image"
                                                    width={350}
                                                    height={210}
                                                />
                                                <div>
                                                    <h4>
                                                        Team AVG{" "}
                                                        <span className="badge bg-secondary">Current</span>
                                                    </h4>
                                                    <ul className="list-group">
                                                        <b className="list-group-item">AVG Team Height: <span style={{ color: "blue" }}>{Math.round(avgTeamHeight()) / 100} m</span></b>
                                                        <b className="list-group-item">AVG Team Weight: <span style={{ color: "blue" }}>{Math.round(avgTeamWeight())} Kg</span></b>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div >
                                            <PowerStats />
                                        </div>

                                    </div>
                                    <div
                                        className="card-header"
                                        style={{ backgroundColor: "var(--first-color)" }}
                                    >
                                        <h3 className="card-title" style={{ color: "#fff" }}>Heroes Team</h3>
                                    </div>
                                    <div className={styles.card__container__team}>
                                        {superheroes && superheroes.map((hero, index) => (
                                            <div key={index} className={styles.card}>
                                                <HeroTeam hero={hero} />
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="card-header"
                                        style={{ backgroundColor: "var(--first-color)" }}
                                    >
                                        <h3 className="card-title" style={{ color: "#fff" }}>Villains Team</h3>
                                    </div>
                                    <div className={styles.card__container__team}>
                                        {villain && villain.map((hero, index) => (
                                            <div key={index} className={styles.card}>
                                                <HeroTeam hero={hero} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-footer text-muted"
                                    style={{ backgroundColor: "#383838", color: "#fff" }}
                                >
                                    Designed by Felix Figueroa. &copy; 2022
                                </div>
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

export default Dashboard;


export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    return {
        props: { session }
    }

}


