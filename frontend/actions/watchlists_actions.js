import * as WatchlistsAPIUtil from '../util/watchlists/watchlists_api_util';

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const UPDATE_WATCHLIST = 'UPDATE_WATCHLIST';
export const REMOVE_WATCHLIST = 'REMOVE_WATCHLIST';
export const RECEIVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';

export const receiveWatchlists = watchlists => ({
    type: RECEIVE_WATCHLISTS,
    watchlists
})

export const receiveWatchlist = watchlist => ({
    type: REMOVE_WATCHLIST,
    watchlist
})

export const receiveWatchlistErrors = (errors) => ({
    type: RECEIVE_WATCHLIST_ERRORS,
    watchlist: errors
})

export const fetchWatchlists = () => (
    WatchlistsAPIUtil.fetchWatchlists().then(
        watchlists => dispatchEvent(receiveWatchlists(watchlists))
    )
)

export const fetchWatchlist = (id) => (
    WatchlistsAPIUtil.fetchWatchlist(id).then(
        watchlist => dispatchEvent(receiveWatchlist(watchlist))
    )
)