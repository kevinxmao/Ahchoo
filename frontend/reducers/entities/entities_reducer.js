import { combineReducers } from "redux";
import usersReducer from './users/users_reducer'
import holdingsReducer from "./holdings/holdings_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    holdings: holdingsReducer
})

export default entitiesReducer;