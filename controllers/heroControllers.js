import Heroe from '../models/heroe';
import User from '../models/user'
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

// Get all heroes... => /api/heroes/
const allHeroes = catchAsyncErrors(async (req, res, next) => {

    const herosCount = await Heroe.countDocuments();
    const herosTeam = await Heroe.find();

    if (!herosTeam) {
        return next(new ErrorHandler('Heroe wasnt found', 404))
    }

    res.status(200).json({
        success: true,
        herosCount,
        herosTeam: herosTeam
    })

})

// Post a new heroe... => /api/heroes
const newHeroe = catchAsyncErrors(async (req, res, next) => {

    const hero = await Heroe.create(req.body);

    if (!hero) {
        return next(new ErrorHandler('Heroe wasnt created', 404))
    }

    res.status(201).json({
        success: true,
        message: 'Heroe was created successfully',
        hero,

    });
});

// Get heroe details ... => /api/heroes/:id
const getSingleHeroe = catchAsyncErrors(async (req, res, next) => {

    const hero = await Heroe.findById(req.query.id);

    if (!hero) {
        return next(new ErrorHandler('Heroe wasnt found with this ID', 404))
    }

    res.status(200).json({
        success: true,
        hero,
        message: 'View detail successfully',

    })
})


// Delete heroe of Database ... => /api/heroes/:id
const deleteHeroe = catchAsyncErrors(async (req, res, next) => {

    const hero = await Heroe.findById(req.query.id);

    if (!hero) {
        return next(new ErrorHandler('Heroe wasnt found with this ID', 404))
    }
    await hero.remove();

    res.status(200).json({
        success: true,
        message: 'Heroe was deleted successfully',
    });

});

export { searchHeroe, deatilsHeroe, allHeroes, newHeroe, getSingleHeroe, deleteHeroe };