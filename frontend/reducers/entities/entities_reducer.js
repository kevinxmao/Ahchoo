import { combineReducers } from "redux";
import usersReducer from './users/users_reducer'
import holdingsReducer from "./holdings/holdings_reducer";
import watchlistsReducer from "./watchlists/watchlists_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    holdings: holdingsReducer,
    watchlists: watchlistsReducer
})

export default entitiesReducer;