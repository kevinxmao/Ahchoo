
import { RECEIVE_CURRENT_USER } from "../../../actions/session_actions";
import { RECEIVE_USER, RECEIVE_PORTFOLIO_VALUE } from "../../../actions/users_actions";
import { RECEIVE_HOLDINGS } from "../../../actions/holdings_action";

// need to add update action
export default (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {
                [action.user.id]: action.user
            });
        case RECEIVE_USER:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        case RECEIVE_HOLDINGS:
            newState[action.payload.user.id] = action.payload.user;
            return newState;
        default:
            return state;
    }
}