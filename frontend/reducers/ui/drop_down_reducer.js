import { ADD_DROPDOWN, REMOVE_DROPDOWN, TOGGLE_DROPDOWN } from "../../actions/ui_actions";

const dropDownReducer = (state=false, action) => {
    switch (action.type) {
        case ADD_DROPDOWN:
            return true;
        case REMOVE_DROPDOWN:
            return false;
        case TOGGLE_DROPDOWN:
            return !state;
        default:
            return state;
    }
}

export default dropDownReducer;