import { combineReducers } from "redux";
import entitiesReducer from "./entities/entities_reducer";
import sessionReducer from "./session/session_reducer";
import errorsReducer from "./errors/errors_reducer";
import uiReducer from "./ui/ui_reducer";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default (state, action) =>
    rootReducer(action.type === LOGOUT_CURRENT_USER ? undefined : state, action);