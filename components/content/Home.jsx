import styles from './Home.module.css';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { herosDefault } from "../../db/hero";
import HeroItem from "../../components/hero/HeroItem";
import { submitSearch } from "../../redux/actions/heroActions";
import { submitDetails } from "../../redux/actions/heroActions";
import { useSelector, useDispatch, connect } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


const Home = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const { hero, loading, success, message, error } = useSelector((state) => state.searchHero)
    const [heroState, setHeroState] = useState(herosDefault);

    useEffect(() => {
        success
            ? (setHeroState(hero), (toast.success(message)))
            : (setHeroState(herosDefault), (toast.error(error)));
    }, [success, error]);


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    /* TODO: Test load wiht intial state from SSR */
    const handleViewDetails = (id) => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(submitDetails(id));
        router.push(`/details/${id}`);
    };



    return (
        <div className="sectionTwo container">
            <h1 className={styles.title}>
                Welcome to <a href="#">Superheroes</a>
            </h1>
            <p className={styles.description}>
                Get started by searching you favorite Superheroes
            </p>

            {/* spinner here */}
            <div className=" d-flex justify-content-center align-items-center my-2 ">
                {loading === true ? (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : null}
            </div>

            {/*  Search Form */}
            <div className=" col-md-6 offset-md-3 p-2">
                <form
                    className="d-flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.submitSearch(search);
                    }}
                >
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <SearchIcon style={{ width: "25px", color: "gray" }} />
                        </span>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={search}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn btn-primary btn__color" type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* Logo HomePage  */}
            <div className={styles.logo__container}>
                <Image src="/assets/img/banner.png" width={400} height={400} />
            </div>
            <div className={styles.grid}>
                {heroState &&
                    heroState.map((hero, index) => (
                        <button
                            key={index}
                            className={styles.card}
                            type="button"
                            onClick={() => {
                                handleViewDetails(hero.id);
                            }}
                        >
                            <HeroItem hero={hero} />
                        </button>
                    ))}
            </div>

        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.searchHero.loading,
    };
};

export default connect(mapStateToProps, { submitSearch })(Home);