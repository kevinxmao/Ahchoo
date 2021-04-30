import { createWatchlist } from "../../../../../actions/watchlists_actions"
import { connect } from "react-redux"
import NewWatchlistForm from "./new_watchlist_form"

const mSTP = state => ({
    userId: state.session.id,
    errors: state.errors.watchlist
})

const mDTP = dispatch => ({
    createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist)),
})

export default connect(mSTP, mDTP)(NewWatchlistForm);