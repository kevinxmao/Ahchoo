import { RECEIVE_WATCHLIST_ERRORS } from "../../../actions/watchlists_actions";
import { CLEAR_ERRORS } from "../../../actions/session_actions";

const watchlistErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_WATCHLIST_ERRORS:
            return action.watchlist;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default watchlistErrorsReducer;