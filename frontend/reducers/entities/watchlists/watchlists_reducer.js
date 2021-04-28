import { RECEIVE_WATCHLISTS, RECEIVE_WATCHLIST, REMOVE_WATCHLIST } from "../../../actions/watchlists_actions";

const watchlistsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_WATCHLISTS:
            if (action.watchlists) return action.watchlists;
        case RECEIVE_WATCHLIST:
            return Object.assign({}, newState, {[ation.watchlist.id]: action.watchlist});
        case REMOVE_WATCHLIST:
            delete newState[action.watchlistId];
            return newState;
        default:
            return newState;
    }
}

export default watchlistsReducer;