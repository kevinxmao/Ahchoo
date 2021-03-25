import * as SessionAPIUtil from '../util/auth/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const RECEIVE_PORTFOLIO_VALUE = 'RECEIVE_PORTFOLIO_VALUE';

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    session: errors,
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const receivePortfolioValue = portfolioValue => ({
    type: RECEIVE_PORTFOLIO_VALUE,
    portfolioValue
})

export const signup = user => dispatch => (
    SessionAPIUtil.signupUser(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        ({ responseJSON }) => dispatch(receiveSessionErrors(responseJSON))
    )
);

export const login = user => dispatch => (
    SessionAPIUtil.loginUser(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        ({ responseJSON }) => dispatch(receiveSessionErrors(responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionAPIUtil.logoutUser().then(
        () => dispatch(logoutCurrentUser())
    )
);