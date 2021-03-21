import { combineReducers } from "redux";
import dropDownReducer from "./drop_down_reducer";

const uiReducer = combineReducers({
    dropDown: dropDownReducer
})

export default uiReducer;