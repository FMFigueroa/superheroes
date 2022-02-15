import Image from "next/image";
import styles from "../../styles/Details.module.css";


const HeroItem = ({ hero }) => {


  // AVG Powerstats for Superheroe
  function avgPowerstats() {
    let sumaPowerstats = (Math.round(hero.powerstats.intelligence) + Math.round(hero.powerstats.strength) + Math.round(hero.powerstats.speed) + Math.round(hero.powerstats.durability) + Math.round(hero.powerstats.power) + Math.round(hero.powerstats.combat)) / 6;
    return sumaPowerstats;
  }

  return (
    <div className="card m-2 card__face--front" style={{ width: 300 }}>
      <h2 className="d-flex justify-content-center pt-2">
        {hero.name}
      </h2>
      <Image
        src={hero.image.url}
        className="card-img-top"
        alt="imagen de supeheroe"
        width={300}
        height={350}
      />
      <div className="card-body">
        <div className="conatiner">
          <div className="row mb-3">
            <div className="col-2 d-flex justify-content-around align-items-center px-0">
              <span className={styles.icon_graph}>
                <Image
                  src="https://img.icons8.com/nolan/64/sigma.png"
                  alt="perfil image"
                  width={32}
                  height={32}
                />
              </span>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-center">
                <i className={styles.title__category__powerstats}>
                  Powerstats AVG
                </i>
              </div>
              <div className="progress" style={{ background: "blue" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${Math.round(avgPowerstats())}%`,
                    height: "16px",
                    fontSize: "9px",
                    background: "linear-gradient(45deg, red, blue)",
                  }}
                  aria-valuenow=""
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {Math.round(avgPowerstats())} %
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-around align-items-center px-0">
              <span className={styles.icon__r__powerstats}>
                {Math.round(avgPowerstats())} %
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroItem;
