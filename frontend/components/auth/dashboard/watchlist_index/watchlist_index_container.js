import { createWatchlist, updateWatchlist, deleteWatchlist, fetchWatchlists } from "../../../../actions/watchlists_actions"
import { connect } from "react-redux"
import WatchlistIndex from "./watchlist_index"

const mSTP = state => ({
    watchlists: Object.values(state.entities.watchlists)
})

const mDTP = dispatch => ({
    fetchWatchlists: () => dispatch(fetchWatchlists()),
    createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist)),
    updateWatchlist: (watchlist) => dispatch(updateWatchlist(watchlist)),
    deleteWatchlist: () => dispatch(deleteWatchlist())
})

export default connect(mSTP, mDTP)(WatchlistIndex);