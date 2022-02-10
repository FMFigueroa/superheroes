import Image from "next/image";
import styles from "../../styles/Details.module.css";
import { useSelector } from "react-redux";

const HeroDetails = ({ hero }) => {
  const { loading } = useSelector((state) => state.detailsHero);

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
            src={hero.image.url}
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
        {/* ------------------------------------------------------------ */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Biography
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Appearance
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------ */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Work
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <br></br>
        </div>
        {/* ========================================================= */}
        <div>
          <h4>PowerStats</h4>
        </div>
        <div className="container">
          {/* ========================================================= */}
          <div className="row justify-content-center">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon_graph}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="col-8 my-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${hero.powerstats.intelligence}%`,
                    margin: "2px 0 2px 0",
                  }}
                  aria-valuenow={hero.powerstats.intelligence}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {hero.powerstats.intelligence}
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon__r}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          {/* ========================================================= */}
          <div className="row justify-content-center">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon_graph}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="col-8 my-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${hero.powerstats.strength}%`,
                    margin: "2px 0 2px 0",
                  }}
                  aria-valuenow={hero.powerstats.strength}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {hero.powerstats.strength}
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon__r}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          {/* ========================================================= */}
          <div className="row justify-content-center">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon_graph}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="col-8 my-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${hero.powerstats.speed}%`,
                    margin: "2px 0 2px 0",
                  }}
                  aria-valuenow="{hero.powerstats.speed}"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {hero.powerstats.speed}
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon__r}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          {/* ========================================================= */}
          <div className="row justify-content-center">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon_graph}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="col-8 my-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${hero.powerstats.durability}%`,
                    margin: "2px 0 2px 0",
                  }}
                  aria-valuenow={hero.powerstats.durability}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {hero.powerstats.durability}
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon__r}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          {/* ========================================================= */}
          <div className="row justify-content-center">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon_graph}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="col-8 my-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${hero.powerstats.power}%`,
                    margin: "2px 0 2px 0",
                  }}
                  aria-valuenow={hero.powerstats.power}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {hero.powerstats.power}
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon__r}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
          {/* ========================================================= */}
          <div className="row justify-content-center">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon_graph}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
            </div>
            <div className="col-8 my-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${hero.powerstats.combat}%`,
                    margin: "2px 0 2px 0",
                  }}
                  aria-valuenow={hero.powerstats.combat}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {hero.powerstats.combat}
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span className={styles.icon__r}>
                <Image
                  src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
                  alt="perfil image"
                  width={30}
                  height={30}
                />
              </span>
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

export default HeroDetails;
