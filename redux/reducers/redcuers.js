import { combineReducers } from 'redux';


import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, resetPasswordReducer, allUsersReducer, userDetailsReducer } from './userReducers'

import { searchHeroReducer, searchDetailsHeroReducer, allHerosReducer, newHeroReducer, DeleteHeroReducer, ReviewHeroReducer } from "./heroReducers";

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    loadedUser: loadedUserReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    searchHero: searchHeroReducer,
    detailsHero: searchDetailsHeroReducer,
    allHeros: allHerosReducer,
    newHero: newHeroReducer,
    deleteHero: DeleteHeroReducer,
    reviewHero: ReviewHeroReducer,

})

export default reducer