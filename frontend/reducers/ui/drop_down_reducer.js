import { ADD_DROPDOWN, REMOVE_DROPDOWN } from "../../actions/ui_actions";

const dropDownReducer = (state=false, action) => {
    switch (action.type) {
        case ADD_DROPDOWN:
            return true;
        case REMOVE_DROPDOWN:
            return false;
        default:
            return state;
    }
}

export default dropDownReducer;