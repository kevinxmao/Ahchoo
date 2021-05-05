import { REDDIFY, GREENIFY } from "../../actions/ui_theme_actions";

const themeReducer = (state = 'green', action) => {
    switch (action.type) {
        case REDDIFY:
            return 'red';
        case GREENIFY:
            return 'green';
        default:
            return state;
    }
}

export default themeReducer;