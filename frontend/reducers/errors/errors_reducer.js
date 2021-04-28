import { combineReducers } from "redux";
import sessionErrorsReducer from "./session/session_errors_reducer";
import watchlistErrorsReducer from "./watchlist/watchlist_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    watchlist: watchlistErrorsReducer
});

export default errorsReducer;