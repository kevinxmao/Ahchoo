
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_PORTFOLIO_VALUE } from "../../actions/session_actions";

const _nullSession = { id: null }

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.user.id });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_PORTFOLIO_VALUE:
            return Object.assign({}, state, {portfolioValue: action.portfolioValue})
        default:
            return state;
    }
}

export default sessionReducer;