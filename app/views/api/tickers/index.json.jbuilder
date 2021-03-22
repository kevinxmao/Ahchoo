@tickers.each do |ticker|
    json.set! ticker.id do
        ticker.partial! 'api/tickers/ticker', ticker: ticker
    end
end