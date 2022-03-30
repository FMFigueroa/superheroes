import axios from "axios";
import absoluteUrl from 'next-absolute-url'

import {
    SEARCH_HERO_REQUEST,
    SEARCH_HERO_SUCCESS,
    SEARCH_HERO_ERROR,

    SEARCH_DETAILS_HERO_REQUEST,
    SEARCH_DETAILS_HERO_SUCCESS,
    SEARCH_DETAILS_HERO_ERROR,

    ALL_HEROS_REQUEST,
    ALL_HEROS_SUCCESS,
    ALL_HEROS_ERROR,

    NEW_HERO_REQUEST,
    NEW_HERO_SUCCESS,
    NEW_HERO_ERROR,


    HERO_DETAILS_SUCCESS,
    HERO_DETAILS_ERROR,
    HERO_DETAILS_REQUEST,

    DELETE_HERO_REQUEST,
    DELETE_HERO_SUCCESS,
    DELETE_HERO_ERROR,

    CLEAR_ERRORS

} from "../constants/heroConstants";

/*===========================================================*/
/*  Action Search a heroe from API Superheros */
/*===========================================================*/

// Get Search Heroe
export const submitSearch = (search) => async (dispatch) => {
    try {

        dispatch({
            type: SEARCH_HERO_REQUEST,
            payload: search,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(search);
        const { data } = await axios.post('/api/search/', { search }, config);

        dispatch({
            type: SEARCH_HERO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_HERO_ERROR,
            payload: error.response.data.message,
        });
    }

};

/*===========================================================*/
/*  Action Get detail View from API Superheros */
/*===========================================================*/
// Get Search Details Heroe
export const submitDetails = (id) => async (dispatch) => {
    try {

        dispatch({
            type: SEARCH_DETAILS_HERO_REQUEST,
            payload: id,
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //console.log(id);
        const { data } = await axios.post(`/api/search/${id}`, { id }, config);

        dispatch({
            type: SEARCH_DETAILS_HERO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_DETAILS_HERO_ERROR,
            payload: error.response.data.message
        });
    }

};

/*===========================================================*/
/*  Action Get All heroes from Db */ // TEAM \\
/*===========================================================*/

export const getHeros = (user_id) => async (dispatch) => {

    try {
        dispatch({ type: ALL_HEROS_REQUEST })
        console.log(`hola: ${user_id}`);

        const { data } = await axios.get('/api/heroes', { headers: { 'id': user_id } });
        dispatch({
            type: ALL_HEROS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_HEROS_ERROR,
            payload: error.response.data.message
        });
    }
};

/*===========================================================*/
/*  Action Post new heroe to Db */ // TEAM \\
/*===========================================================*/

export const newHero = (heroData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_HERO_REQUEST });

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post(`/api/heroes`, heroData, config);

        dispatch({
            type: NEW_HERO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_HERO_ERROR,
            payload: error.response.data.message
        });
    }
};

/*===========================================================*/
/*  Get Deatil heroe from Db*/ // TEAM \\
/*===========================================================*/

//
export const getHeroeDetails = (id, req) => async (dispatch) => {
    try {
        dispatch({ type: HERO_DETAILS_REQUEST });

        const { origin } = absoluteUrl(req);

        const { data } = await axios.get(`${origin}/api/heroes/${id}`);

        dispatch({
            type: HERO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: HERO_DETAILS_ERROR,
            payload: error.response.data.message
        });
    }
};

/*===========================================================*/
/*  Action Delete heroe from Db */ // TEAM \\
/*===========================================================*/

export const deleteHero = (id, req) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_HERO_REQUEST });

        const { origin } = absoluteUrl(req);

        const { data } = await axios.delete(`${origin}/api/heroes/${id}`);

        dispatch({
            type: DELETE_HERO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DELETE_HERO_ERROR,
            payload: error.response.data.message
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};