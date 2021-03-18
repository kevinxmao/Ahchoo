import { RECEIVE_USER } from "../../../actions/users_actions";

const holdingsReducer = (state={}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_USER:
            return action.payload.holdings;
        default:
            return newState;
    }
}

export default holdingsReducer;