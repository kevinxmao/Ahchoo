import * as UserAPIUtil from '../util/users/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: {
        user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            funds: user.funds,
        },
        holdings: user.holdings
    }
})

window.receiveUser = receiveUser

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId).then(
        user => dispatch(receiveUser(user))
    )
);

window.fetchUser = fetchUser;

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user).then(
        user => dispatch(receiveUser(user))
    )
);