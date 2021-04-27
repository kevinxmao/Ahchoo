export const fetchWatchlist = watchlistId => (
    $.ajax({
        method: 'GET',
        url: `api/watchlists/${watchlistId}`,
    })
)

export const createWatchlist = watchlist => (
    $.ajax({
        method: 'POST',
        url: `api/watchlists`,
        data: {watchlist}
    })
)

export const updateWatchlist = watchlist => (
    $.ajax({
        method: 'PATCH',
        url: `api/watchlists/${watchlist.id}`,
        data: {watchlist}
    })
)

export const deleteWatchlist = watchlistId => (
    $.ajax({
        method: 'DELETE',
        url: `api/watchlists/${watchlistId}`
    })
)