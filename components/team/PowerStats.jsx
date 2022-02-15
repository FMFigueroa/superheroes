import styles from "../../styles/Dashboard.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";

const PowerStats = () => {
  const heros = useSelector((state) => state.allHeros.herosTeam);

  function statsIntelligence() {
    let intelligence = heros.map((hero) => hero.powerstats[0].intelligence);
    let sumaInt = 0;
    for (var i = 0; i < intelligence.length; i++) {
      (sumaInt += parseInt(intelligence[i]) / intelligence.length);
    }
    return sumaInt;
  }

  function statsStrength() {
    let strength = heros.map((hero) => hero.powerstats[0].strength);
    let sumaStr = 0;
    for (var i = 0; i < strength.length; i++) {
      (sumaStr += parseInt(strength[i]) / strength.length);
    }
    return sumaStr;
  }

  function statsSpeed() {
    let speed = heros.map((hero) => hero.powerstats[0].speed);
    let sumaSpe = 0;
    for (var i = 0; i < speed.length; i++) {
      (sumaSpe += parseInt(speed[i]) / speed.length);
    }
    return sumaSpe;
  }

  function statsDurability() {
    let durability = heros.map((hero) => hero.powerstats[0].durability);
    let sumaDur = 0;
    for (var i = 0; i < durability.length; i++) {
      (sumaDur += parseInt(durability[i]) / durability.length);
    }
    return sumaDur;
  }

  function statsPower() {
    let power = heros.map((hero) => hero.powerstats[0].power);
    let sumaPow = 0;
    for (var i = 0; i < power.length; i++) {
      (sumaPow += parseInt(power[i]) / power.length);
    }
    return sumaPow;
  }

  function statsCombat() {
    let combat = heros.map((hero) => hero.powerstats[0].combat);
    let sumaCom = 0;
    for (var i = 0; i < combat.length; i++) {
      (sumaCom += parseInt(combat[i]) / combat.length);
    }
    return sumaCom;
  }

  function powerstatsAverage() {
    let average = [statsIntelligence(), statsStrength(), statsSpeed(), statsDurability(), statsPower(), statsCombat()];
    let sumaAvg = 0;
    for (var i = 0; i < average.length; i++) {
      (sumaAvg += parseInt(average[i]) / average.length);
    }
    return sumaAvg;
  }

  return (
    <div className={styles.card__powerstats}>
      <div className="card-header" style={{ backgroundColor: "var(--first-color)", color: "#fff" }}>
        <h4>PowerStats Team</h4>
      </div>
      <div className="container my-4">
        {/* ===================== statsIntelligence ======================== */}
        <div className="row justify-content-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon_graph}>
              <Image
                src="/assets/img/logo_team.png"
                alt="perfil image"
                width={40}
                height={30}
              />
            </span>
          </div>
          <div className="col-8">
            <div>
              <i className={styles.title__category__powerstats}>
                Intelligence
              </i>
            </div>
            <div className="progress" style={{ background: "blue" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${statsIntelligence()}%`,
                  background: "linear-gradient(45deg, red, blue)"
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>

            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon__r}>
              {Math.round(statsIntelligence())}%
            </span>
          </div>
        </div>
        {/* =================== statsStrength ======================== */}
        <div className="row justify-content-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon_graph}>
              <Image
                src="/assets/img/logo_team.png"
                alt="perfil image"
                width={40}
                height={30}
              />
            </span>
          </div>
          <div className="col-8">
            <div>
              <i className={styles.title__category__powerstats}>
                Strength
              </i>
            </div>
            <div className="progress" style={{ background: "blue" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${statsStrength()}%`,
                  background: "linear-gradient(45deg, red, blue)"
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon__r}>
              {Math.round(statsStrength())}%
            </span>
          </div>
        </div>
        {/* ====================== statsSpeed ======================== */}
        <div className="row justify-content-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon_graph}>
              <Image
                src="/assets/img/logo_team.png"
                alt="perfil image"
                width={40}
                height={30}
              />
            </span>
          </div>
          <div className="col-8">
            <div>
              <i className={styles.title__category__powerstats}>
                Speed
              </i>
            </div>
            <div className="progress" style={{ background: "blue" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${statsSpeed()}%`,
                  background: "linear-gradient(45deg, red, blue)"
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon__r}>
              {Math.round(statsSpeed())}%
            </span>
          </div>
        </div>
        {/* ===================== statsDurability ======================= */}
        <div className="row justify-content-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon_graph}>
              <Image
                src="/assets/img/logo_team.png"
                alt="perfil image"
                width={40}
                height={30}
              />
            </span>
          </div>
          <div className="col-8">
            <div>
              <i className={styles.title__category__powerstats}>
                Durability
              </i>
            </div>
            <div className="progress" style={{ background: "blue" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${statsDurability()}%`,
                  background: "linear-gradient(45deg, red, blue)"
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon__r}>
              {Math.round(statsDurability())}%
            </span>
          </div>
        </div>
        {/* ===================== statsPower ========================= */}
        <div className="row justify-content-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon_graph}>
              <Image
                src="/assets/img/logo_team.png"
                alt="perfil image"
                width={40}
                height={30}
              />
            </span>
          </div>
          <div className="col-8">
            <div>
              <i className={styles.title__category__powerstats}>
                Power
              </i>
            </div>
            <div className="progress" style={{ background: "blue" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${statsPower()}%`,
                  background: "linear-gradient(45deg, red, blue)"
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon__r}>
              {Math.round(statsPower())}%
            </span>
          </div>
        </div>
        {/* ====================== statsCombat ======================= */}
        <div className="row justify-content-center">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon_graph}>
              <Image
                src="/assets/img/logo_team.png"
                alt="perfil image"
                width={40}
                height={30}
              />
            </span>
          </div>
          <div className="col-8" >
            <div>
              <i className={styles.title__category__powerstats}>
                Combat
              </i>
            </div>
            <div className="progress" style={{ background: "blue" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${statsCombat()}%`,
                  background: "linear-gradient(45deg, red, blue)"
                }}
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <span className={styles.icon__r}>
              {Math.round(statsCombat())}%
            </span>
          </div>
        </div>
        {/* ========================================================= */}
      </div>
      <div style={{ backgroundColor: "var(--first-color)" }}>
        <h4 style={{ color: "#fff", padding: "10px" }}>PowerStats AVG </h4>
      </div>
      <div className="conatiner">
        <div className="d-flex justify-content-center align-items-center">
          <h1 style={{ color: "blue" }}>{Math.round(powerstatsAverage())} %</h1>

        </div>
      </div>

    </div >
  );
};

export default PowerStats;
