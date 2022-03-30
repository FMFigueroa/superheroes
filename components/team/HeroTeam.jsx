import Image from "next/image";
import styles from "../../styles/Details.module.css";
import { deleteHero, getHeroeDetails } from "../../redux/actions/heroActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getHeros } from "../../redux/actions/heroActions";


const HeroTeam = ({ hero }) => {

  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector(state => state.loadedUser);

  // Delete Superheroe from Team
  const handlerDeleteHero = (id) => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      const user_id = user._id;
      dispatch(deleteHero(id));
      dispatch(getHeros(user_id));
      router.push("/dashboard"); // refresh page for look message success or error
    }

  };

  // View Detail Superheroe from Team
  const handlerDetailHero = (id) => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(getHeroeDetails(id));
    router.push(`/dashboard/${hero._id}`); // refresh page for look message success or error
  };

  // AVG Powerstats for Team
  function avgPowerstats() {
    let sumaPowerstats = (Math.round(hero.powerstats[0].intelligence) + Math.round(hero.powerstats[0].strength) + Math.round(hero.powerstats[0].speed) + Math.round(hero.powerstats[0].durability) + Math.round(hero.powerstats[0].power) + Math.round(hero.powerstats[0].combat)) / 6;
    return sumaPowerstats;
  }

  return (
    <div className="card m-2 card__face--front" style={{ width: 300 }}>
      <h2 className="d-flex justify-content-center card-title py-2">
        {hero.name}
      </h2>
      <Image
        src={hero.image[0].url}
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
        <div className="d-flex justify-content-center align-items-center gap-5">
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              handlerDeleteHero(hero._id)
            }}
          >
            <i className="ri-delete-bin-line" style={{ fontSize: "0.8rem" }}></i> Delete
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              handlerDetailHero(hero._id)
            }}
          >
            View &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroTeam;
