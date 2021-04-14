import { combineReducers } from "redux";
import dropDownReducer from "./drop_down_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
    dropdown: dropDownReducer,
    modal: modalReducer
})

export default uiReducer;