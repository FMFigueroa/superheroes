import { useSelector, useDispatch } from "react-redux";
import { newHero } from "../../redux/actions/heroActions";
import { useRouter } from "next/router";

const AddTeam = ({ hero }) => {

    const router = useRouter();
    const dispatch = useDispatch();


    // Add Superheroe to Team
    const handleNewHero = (id) => {
        let heroData = hero;
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(newHero(heroData));
        router.push(`/details/${id}`); // refresh page for look message success or error
    };


    return (
        <button
            className="btn btn-success mx-3 mb-3"
            type="button"
            onClick={() => handleNewHero(hero.id)}
        >
            Add Team
        </button>
    )
}

export default AddTeam
