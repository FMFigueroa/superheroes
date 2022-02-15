import { useSelector, useDispatch } from "react-redux";
import { newHero } from "../../redux/actions/heroActions";
import { getHeros } from "../../redux/actions/heroActions";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { ExternalLinkIcon } from "@heroicons/react/outline";

const AddTeam = ({ hero }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector(state => state.loadedUser);
    const herosTeam = useSelector((state) => state.allHeros.herosTeam);
    const heroeDetails = useSelector((state) => state.detailsHero.hero);


    // Add Superheroe to Team   
    const handleNewHero = (id) => {
        if (isAuthenticated) {
            const hero_Id = herosTeam.filter((heroId) => heroId.id == id);//filter the hero with the id in the team
            if (hero_Id.length === 0) {
                //console.log(hero_Id.length)
                // This const is for select if the hero view details is good or bad.
                const heroe = heroeDetails.filter((heroDetails) => heroDetails.biography.alignment === "good");
                if (heroe.length === 0) {
                    //console.log("villain")
                    // This cicle is for Villain
                    const villain = herosTeam.filter((hero) => hero.biography[0].alignment === "bad");
                    if (villain.length >= 3) {
                        //console.log(villain.length)
                        toast.error("You can't add more than 3 Villains to your Team");
                    } else {
                        const heroData = { ...hero, user: user._id }
                        dispatch(newHero(heroData));
                        dispatch(getHeros());// update state of the Team
                        router.push(`/details/${id}`) // refresh page for look message success or error   
                    }
                } else {
                    // This cicle is for Superheroe
                    const superheroes = herosTeam.filter((hero) => hero.biography[0].alignment === "good");
                    console.log("superhero")
                    if (superheroes.length >= 3) {
                        toast.error("You can't add more than 3 superheroes to your team");
                    } else {
                        const heroData = { ...hero, user: user._id }
                        dispatch(newHero(heroData));
                        dispatch(getHeros());// update state of the Team
                        router.push(`/details/${id}`); // refresh page for look message success or error
                    }
                }
            } else {
                toast.error("This Hero already in team")
            }
        } else {
            (toast.error("You need to be logged in to add a hero to your team"))
        }
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



/* const heroe = heroeDetails.filter((heroDetails) => heroDetails.biography.alignment === "good");
                if (heroe.length === 0) {
                    const villain = herosTeam.filter((hero) => hero.biography[0].alignment === "bad");
                    if (villain.length >= 3) {
                        toast.error("You can't add more than 3 Villains to your Team");
                    } else {
                        const heroData = { ...hero, user: user._id }
                        dispatch(newHero(heroData));
                        router.push(`/details/${id}`); // refresh page for look message success or error
                    }
                } else {
                    const superheroes = herosTeam.filter((hero) => hero.biography[0].alignment === "good");
                    if (superheroes >= 3) {
                        toast.error("You can't add more than 3 superheroes to your team");
                    } else {
                        const heroData = { ...hero, user: user._id }
                        dispatch(newHero(heroData));
                        router.push(`/details/${id}`); // refresh page for look message success or error
                    }
                } */