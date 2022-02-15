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
    NEW_HERO_RESET,
    NEW_HERO_ERROR,

    HERO_DETAILS_REQUEST,
    HERO_DETAILS_SUCCESS,
    HERO_DETAILS_ERROR,

    DELETE_HERO_REQUEST,
    DELETE_HERO_SUCCESS,
    DELETE_HERO_RESET,
    DELETE_HERO_ERROR,

    CLEAR_ERRORS

} from '../constants/heroConstants';

const initialState = {
    loading: false,
    hero: [],
    searchs: [],
};

// Get Search Hero
export const searchHeroReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_HERO_REQUEST:
            return {
                loading: true,
                searchs: [...state.searchs, action.payload],
            }
        case SEARCH_HERO_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                hero: action.payload.hero,
            }
        case SEARCH_HERO_ERROR:
            return {
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

// Get Search Details View Heroe
export const searchDetailsHeroReducer = (state = { hero: {}, loading: false }, action) => {
    switch (action.type) {
        case SEARCH_DETAILS_HERO_REQUEST:
            return {

                loading: true,
            }
        case SEARCH_DETAILS_HERO_SUCCESS:
            return {
                ...state,
                loading: false,
                successDtl: action.payload.successDtl,
                messageDtl: action.payload.messageDtl,
                hero: [action.payload.hero],
            }
        case SEARCH_DETAILS_HERO_ERROR:
            return {
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

// Get All heros reducer (Dashboard => Team)
export const allHerosReducer = (state = { herosTeam: [] }, action) => {
    switch (action.type) {

        /* case ALL_HEROS_REQUEST:
            return {
                loading: true,
            } */
        case ALL_HEROS_SUCCESS:
            return {
                ...state,
                loading: false,
                herosCount: action.payload.herosCount,
                herosTeam: action.payload.herosTeam,
            };
        case ALL_HEROS_ERROR:
            return {
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// Post New Hero reducer
export const newHeroReducer = (state = { hero: {} }, action) => {
    switch (action.type) {
        case NEW_HERO_REQUEST:
            return {
                loading: true,
            }
        case NEW_HERO_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                hero: action.payload.hero,

            }
        case NEW_HERO_RESET:
            return {
                success: false,
            }
        case NEW_HERO_ERROR:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

// View Hero reducer
export const ReviewHeroReducer = (state = { hero: {}, loading: false }, action) => {
    switch (action.type) {
        case HERO_DETAILS_REQUEST:
            return {

                loading: true,
            }
        case HERO_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                hero: [action.payload.hero],
            }
        case HERO_DETAILS_ERROR:
            return {
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

// Delete  Hero reducer
export const DeleteHeroReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_HERO_REQUEST:
            return {
                loading: true,
            }
        case DELETE_HERO_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            }
        case DELETE_HERO_RESET:
            return {
                loading: false,
                success: false,
            }
        case DELETE_HERO_ERROR:
            return {
                loading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

