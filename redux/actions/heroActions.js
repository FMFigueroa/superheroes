import axios from "axios";

import {
    SEARCH_HERO_REQUEST,
    SEARCH_HERO_SUCCESS,
    SEARCH_HERO_ERROR,

    SEARCH_DETAILS_HERO_REQUEST,
    SEARCH_DETAILS_HERO_SUCCESS,
    SEARCH_DETAILS_HERO_ERROR,

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
        console.log(id);
        const { data } = await axios.post(`/api/search/${id}`, { id }, config);

        dispatch({
            type: SEARCH_DETAILS_HERO_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_DETAILS_HERO_ERROR,
            payload: error.response.data.message,
        });
    }

};




// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};