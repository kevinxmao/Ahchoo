import * as HoldingsAPIUtil from '../util/holdings/holdings_api_util';

export const RECEIVE_HOLDINGS = 'RECEIVE_HOLDINGS';
export const RECEIVE_HOLDING = 'RECEIVE_HOLDING';
export const REMOVE_HOLDING = 'REMOVE_HOLDINGD';

export const receiveHolding = holding => ({
    type: RECEIVE_HOLDING,
    holding
})

export const receiveHoldings = user => ({
    type: RECEIVE_HOLDINGS,
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

export const removeHolding = holdingId => ({
    type: REMOVE_HOLDING,
    holdingId
})

export const fetchHoldings = () => dispatch => (
    HoldingsAPIUtil.fetchHoldings().then(
        holdings => dispatch(receiveHoldings(holdings))
    )
);

export const fetchHolding = holdingId => dispatch => (
    HoldingsAPIUtil.fetchHolding(holdingId).then(
        holding => dispatch(receiveHolding(holding))
    )
);

// returns a payload containing info of holding and updated user
export const createHolding = holding => dispatch => (
    HoldingsAPIUtil.createHolding(holding).then(
        user => dispatch(receiveHoldings(user))
    )
);

// returns a payload containing info of holding and updated user
export const updateHolding = holding => dispatch => (
    HoldingsAPIUtil.updateHolding(holding).then(
        user => dispatch(receiveHoldings(user))
    )
)

// returns a payload containing info of holding and updated user
export const deleteHolding = holdingId => dispatch => (
    HoldingsAPIUtil.deleteHolding(holdingId).then(
        (user) => dispatch(receiveHoldings(user))
    )
);