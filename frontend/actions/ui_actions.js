export const ADD_DROPDOWN = "ADD_DROPDOWN";
export const REMOVE_DROPDOWN = "REMOVE_DROPDOWN";
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const REDDIFY = "REDDIFY";
export const GREENIFY = "GREENIFY";

export const addDropdown = () => ({
    type: ADD_DROPDOWN
});

export const removeDropdown = () => ({
    type: REMOVE_DROPDOWN
});

export const toggleDropdown = () => ({
    type: TOGGLE_DROPDOWN
})