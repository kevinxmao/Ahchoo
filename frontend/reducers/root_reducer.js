import { combineReducers } from "redux";
import entitiesReducer from "./entities/entities_reducer";
import sessionReducer from "./session/session_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
});

export default rootReducer;