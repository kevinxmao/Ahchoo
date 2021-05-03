import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// test import
// import { login, logout } from './actions/session_actions';
// import * as HoldingsActions from './actions/holdings_action';
// import { fetchSingleQuote, fetchAllQuotes } from "./util/companies/data_api_util";
// import * as WatchlistsActions from './actions/watchlists_actions';
// import { fetchWatchlist, createWatchlist, updateWatchlist, deleteWatchlist, fetchWatchlists } from './util/watchlists/watchlists_api_util';
// import { clearErrors } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {id: window.currentUser.id}
        }
        delete window.currentUser;
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    // test
    window.store = store;
    // window.
    // window.login = login;
    // window.logout = logout;
    // // window.fetchHoldings = HoldingsActions.fetchHoldings;
    // // window.fetchHolding = HoldingsActions.fetchHolding;
    // window.createHolding = HoldingsActions.createHolding;
    // window.deleteHolding = HoldingsActions.deleteHolding;
    // window.updateHolding = HoldingsActions.updateHolding;
    // window.fetchSingleQuote = fetchSingleQuote;
    // window.fetchAllQuotes = fetchAllQuotes;
    // window.clearErrors = clearErrors;

    // window.fetchWatchlist = WatchlistsActions.fetchWatchlist;
    // window.fetchWatchlists = WatchlistsActions.fetchWatchlists;
    // window.createWatchlist = WatchlistsActions.createWatchlist;
    // window.updateWatchlist = WatchlistsActions.updateWatchlist;
    // window.deleteWatchlist = WatchlistsActions.deleteWatchlist;

    ReactDOM.render(<Root store={store}/>, root);
});