import axios from "axios";
import ErrorHandler from '../utils/errorHandler';
import catchAsyncErrors from "../middlewares/catchAsyncErrors";


// Get search heroes... => /api/search/
const searchHeroe = catchAsyncErrors(async (req, res, next) => {

    const apiUrl = process.env.API_KEY;

    const name = req.body.search;
    console.log(name);

    // https://superheroapi.com/api/access-token/search/name

    await fetch(`${apiUrl}/${name}`).then(response => {
        if (!response.ok) {
            return next(new ErrorHandler('Not Connected', 404))
        }
        return response.json();
    }).then(heros => {
        res.status(200).json({
            success: true,
            message: heros.response === 'error' ? "Try again, Heroe wasnt found..!" : "Search Successfull..!",
            hero: heros.results,

        })
    })
});

// Get search deatils heroe... => /api/search/[id]
const deatilsHeroe = catchAsyncErrors(async (req, res, next) => {

    const id = req.body.id;

    // this other endpoint is for the heroe details

    await fetch(`${process.env.API_ID}/${id}`).then(response => {
        if (!response.ok) {
            return next(new ErrorHandler('Not Connected', 404))
        }
        return response.json();
    }).then(hero => {
        res.status(200).json({
            successDtl: hero.response === 'error' ? false : true,
            hero: hero,
            messageDtl: hero.response === 'error' ? hero.error : "Successful Detail View..!",
        })
    })
});

export { searchHeroe, deatilsHeroe };