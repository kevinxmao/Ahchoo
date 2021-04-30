import React from 'react';
import { connect } from 'react-redux';
import { createWatchlist } from '../../../../actions/watchlists_actions';

function NewWatchlistForm(props) {
    
}

const mDTP = dispatch => ({
    createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist))
})

export default connect(null, mDTP)(NewWatchlistForm);