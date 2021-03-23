import * as UserAPIUtil from '../util/users/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PORTFOLIO_VALUE = 'RECEIVE_PORTFOLIO_VALUE';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: {
        user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            funds: user.funds
        },
        holdings: user.holdings
    }
})

export const receivePortfolioValue = (portfolioValue) => ({
  type: RECEIVE_PORTFOLIO_VALUE,
  portfolioValue
});

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId).then(
        data => dispatch(receiveUser(data))
    )
);

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user).then(
        user => dispatch(receiveUser(user))
    )
);