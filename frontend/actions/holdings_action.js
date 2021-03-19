import * as HoldingsAPIUtil from '../util/holdings/holdings_api_util'

export const RECEIVE_HOLDINGS = 'RECEIVE_HOLDINGS';
export const RECEIVE_HOLDING = 'RECEIVE_HOLDING';
export const REMOVE_HOLDING = 'REMOVE_HOLDINGD';

export const receiveHolding = holding => ({
    type: RECEIVE_HOLDING,
    holding
})

export const receiveHoldings = holdings => ({
    type: RECEIVE_HOLDINGS,
    holdings
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

export const createHolding = holding => dispatch => (
    HoldingsAPIUtil.createHolding(holding).then(
        holding => dispatch(receiveHolding(holding))
    )
);

export const removeHolding = holdingId => dispatch => (
    HoldingsAPIUtil.removeHolding(holdingId).then(
        () => dispatch(removeHolding(holdingId))
    )
);