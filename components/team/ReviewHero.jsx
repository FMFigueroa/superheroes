import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import styles from "../../styles/Details.module.css";
import { useSelector } from "react-redux";

const ReviewHero = ({ hero }) => {
    const { loading } = useSelector((state) => state.reviewHero);


    return (
        <>
            {/* ========================================================= */}
            {/* ======================  Card 1  ======================== */}
            {/* ========================================================= */}

            <div className={styles.card__image}>
                {loading === true ? (
                    <div className={styles.loading}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <Image
                        src={hero.image[0].url}
                        alt="perfil image"
                        width={400}
                        height={500}
                    />
                )}
            </div>

            {/* ========================================================= */}
            {/* =============== Card 2 accordion-flush  ================= */}
            {/* ========================================================= */}
            <div className={styles.card__powerstats}>
                <div className="card-header">
                    <h4>Background</h4>
                </div>
                {/* ----------------------- Biography --------------------------- */}
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header " id="flush-headingOne">
                            <button
                                className="accordion-button collapsed card__face--front"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                <h5>Biography</h5>
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Is named {hero.biography[0].aliases[0]} was created by{" "}
                                {hero.biography[0].publisher}.
                            </div>
                        </div>
                    </div>
                    {/* ---------------------- Appearance ------------------------- */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button collapsed card__face--front"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                <h5>Appearance</h5>
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Gender: {hero.appearance[0].gender}
                                <br />
                                Race: {hero.appearance[0].race}
                                <br />
                                Height: {hero.appearance[0].height[0]} /{" "}
                                {hero.appearance[0].height[1]}
                                <br />
                                Weight: {hero.appearance[0].weight[0]} /{" "}
                                {hero.appearance[0].weight[1]}
                                <br />
                            </div>
                        </div>
                    </div>
                    {/* ------------------------ Work ------------------------------ */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button
                                className="accordion-button collapsed card__face--front"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                <h5>Work</h5>
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Occupation: {hero.work[0].occupation} <br />
                                Base: {hero.work[0].base}
                            </div>
                        </div>
                    </div>
                    {/* ========================================================= */}
                    <br></br>
                </div>
                {/* ====================== PowerStats ======================= */}
                <div>
                    <h4>PowerStats</h4>
                </div>
                <div className="container">
                    {/* ===================== Intelligence ====================== */}
                    <div className="row">
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon_graph}>
                                <Image
                                    src="https://img.icons8.com/nolan/64/artificial-intelligence.png"
                                    alt="perfil image"
                                    width={32}
                                    height={32}
                                />
                            </span>
                        </div>
                        <div className="col-8">
                            <div>
                                <i className={styles.title__category__powerstats}>
                                    Intelligence
                                </i>
                            </div>
                            <div className="progress" style={{ height: "14px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${hero.powerstats[0].intelligence}%`,
                                        height: "14px",
                                        fontSize: "9px",
                                        background: "linear-gradient(45deg, blue, red)",
                                    }}
                                    aria-valuenow={hero.powerstats[0].intelligence}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {hero.powerstats[0].intelligence}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon__r}>
                                {hero.powerstats[0].intelligence} %
                            </span>
                        </div>
                    </div>
                    {/* ===================== Strength ========================== */}
                    <div className="row">
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon_graph}>
                                <Image
                                    src="https://img.icons8.com/nolan/64/weightlift.png"
                                    alt="perfil image"
                                    width={32}
                                    height={32}
                                />
                            </span>
                        </div>
                        <div className="col-8">
                            <div>
                                <i className={styles.title__category__powerstats}>Strength</i>
                            </div>
                            <div className="progress" style={{ height: "14px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${hero.powerstats[0].strength}%`,
                                        height: "14px",
                                        fontSize: "9px",
                                        background: "linear-gradient(45deg, blue, red)",
                                    }}
                                    aria-valuenow={hero.powerstats[0].strength}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {hero.powerstats[0].strength}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon__r}>
                                {hero.powerstats[0].strength} %
                            </span>
                        </div>
                    </div>
                    {/* ====================== Speed ============================ */}
                    <div className="row">
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon_graph}>
                                <Image
                                    src="https://img.icons8.com/nolan/64/exercise.png"
                                    alt="perfil image"
                                    width={32}
                                    height={32}
                                />
                            </span>
                        </div>
                        <div className="col-8">
                            <div>
                                <i className={styles.title__category__powerstats}>Speed</i>
                            </div>
                            <div className="progress" style={{ height: "14px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${hero.powerstats[0].speed}%`,
                                        height: "14px",
                                        fontSize: "9px",
                                        background: "linear-gradient(45deg, blue, red)",
                                    }}
                                    aria-valuenow="{hero.powerstats[0].speed}"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {hero.powerstats[0].speed}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon__r}>{hero.powerstats[0].speed} %</span>
                        </div>
                    </div>
                    {/* ===================== Durability ========================== */}
                    <div className="row">
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon_graph}>
                                <Image
                                    src="https://img.icons8.com/nolan/64/full-battery.png"
                                    alt="perfil image"
                                    width={25}
                                    height={25}
                                />
                            </span>
                        </div>
                        <div className="col-8">
                            <div>
                                <i className={styles.title__category__powerstats}>Durability</i>
                            </div>
                            <div className="progress" style={{ height: "14px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${hero.powerstats[0].durability}%`,
                                        height: "14px",
                                        fontSize: "9px",
                                        background: "linear-gradient(45deg, blue, red)",
                                    }}
                                    aria-valuenow={hero.powerstats[0].durability}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {hero.powerstats[0].durability}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon__r}>
                                {hero.powerstats[0].durability} %
                            </span>
                        </div>
                    </div>
                    {/* ===================== Power ========================== */}
                    <div className="row">
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon_graph}>
                                <Image
                                    src="https://img.icons8.com/nolan/64/lightning-bolt.png"
                                    alt="perfil image"
                                    width={32}
                                    height={32}
                                />
                            </span>
                        </div>
                        <div className="col-8">
                            <div>
                                <i className={styles.title__category__powerstats}>Power</i>
                            </div>
                            <div className="progress" style={{ height: "14px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${hero.powerstats[0].power}%`,
                                        height: "14px",
                                        fontSize: "9px",
                                        background: "linear-gradient(45deg, blue, red)",
                                    }}
                                    aria-valuenow={hero.powerstats[0].power}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {hero.powerstats[0].power}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon__r}>{hero.powerstats[0].power} %</span>
                        </div>
                    </div>
                    {/* ====================== Combat ========================= */}
                    <div className="row">
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon_graph}>
                                <Image
                                    src="https://img.icons8.com/nolan/64/boxing.png"
                                    alt="perfil image"
                                    width={32}
                                    height={32}
                                />
                            </span>
                        </div>
                        <div className="col-8">
                            <div>
                                <i className={styles.title__category__powerstats}>Combat</i>
                            </div>
                            <div className="progress" style={{ height: "14px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${hero.powerstats[0].combat}%`,
                                        height: "14px",
                                        fontSize: "9px",
                                        background: "linear-gradient(45deg, blue, red)",
                                    }}
                                    aria-valuenow={hero.powerstats[0].combat}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {hero.powerstats[0].combat}
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-flex justify-content-around align-items-center px-0">
                            <span className={styles.icon__r}>{hero.powerstats[0].combat} %</span>
                        </div>
                    </div>
                    {/* ========================================================= */}
                </div>

                {/* ========================================================= */}
            </div>
            {/* ========================================================= */}
        </>
    );
};

export default ReviewHero;
