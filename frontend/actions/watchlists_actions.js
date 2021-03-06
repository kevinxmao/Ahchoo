import * as WatchlistsAPIUtil from '../util/watchlists/watchlists_api_util';

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const REMOVE_WATCHLIST = 'REMOVE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';

export const receiveWatchlists = watchlists => ({
    type: RECEIVE_WATCHLISTS,
    watchlists
})

export const receiveWatchlist = watchlist => ({
    type: RECEIVE_WATCHLIST,
    watchlist
})

export const removeWatchlist = watchlistId => ({
    type: REMOVE_WATCHLIST,
    watchlistId
})

export const receiveWatchlistErrors = (errors) => ({
    type: RECEIVE_WATCHLIST_ERRORS,
    watchlist: errors
})

export const fetchWatchlists = () => dispatch => (
    WatchlistsAPIUtil.fetchWatchlists().then(
        watchlists => dispatch(receiveWatchlists(watchlists))
    )
)

export const fetchWatchlist = (id) => dispatch => (
    WatchlistsAPIUtil.fetchWatchlist(id).then(
        watchlist => dispatch(receiveWatchlist(watchlist))
    )
)

export const createWatchlist = watchlist => dispatch => (
    WatchlistsAPIUtil.createWatchlist(watchlist).then(
        (watchlist) => dispatch(receiveWatchlist(watchlist)),
        ({ responseJSON }) => dispatch(receiveWatchlistErrors(responseJSON))
    )
)

export const updateWatchlist = watchlist => dispatch => (
    WatchlistsAPIUtil.updateWatchlist(watchlist).then(
        (watchlist) => dispatch(receiveWatchlist(watchlist)),
        ({ responseJSON }) => dispatch(receiveWatchlistErrors(responseJSON))
    )
)

export const deleteWatchlist = watchlistId => dispatch => (
    WatchlistsAPIUtil.deleteWatchlist(watchlistId).then(
        () => dispatch(removeWatchlist(watchlistId))
    )
)