
import { RECEIVE_CURRENT_USER } from "../../../actions/session_actions";
import { RECEIVE_USER } from "../../../actions/users_actions";

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
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
}