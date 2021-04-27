json.extract! watchlist, :id, :name, :user_id

json.tickers do
    json.array! watchlist.tickers, :id, :ticker
end