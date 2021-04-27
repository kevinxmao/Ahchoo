# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

User.delete_all
Ticker.delete_all
Watchlist.delete_all
WatchlistJoin.delete_all

demo = User.create({email: 'demo@app.com', first_name: 'Demo', last_name: 'User', password: 'demouser'});

# Seed tickers table
csv_text = File.read(Rails.root.join('lib', 'seeds', 'listings.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    # if row['Company'].include?('Common Stock')
        t = Ticker.new
        t.ticker = row['Ticker']
        # t.company = row['Company'].gsub(/ Common Stock/, "")
        t.company = row['Company']
        t.save
        puts "#{t.ticker}, #{t.company} saved"
    # end
end

# Seed holdings
holding1 = Ticker.find_by(ticker: "AAPL")
holding2 = Ticker.find_by(ticker: "TSLA")
holding3 = Ticker.find_by(ticker: "AA")
holding4 = Ticker.find_by(ticker: "PTON")
holding5 = Ticker.find_by(ticker: "AAL")
holding6 = Ticker.find_by(ticker: "NIO")
holding7 = Ticker.find_by(ticker: "MSFT")

Holding.create({user: demo, ticker: holding1, quantity: 20, avg_price: 100.67})
Holding.create({user: demo, ticker: holding2, quantity: 30, avg_price: 467.34})
Holding.create({user: demo, ticker: holding3, quantity: 54, avg_price: 42.98})
Holding.create({user: demo, ticker: holding4, quantity: 29, avg_price: 120.35})

watchlist1 = Watchlist.create({name: 'Buy', user: demo})

WatchlistJoin.create({watchlist: watchlist1, ticker: holding2})
WatchlistJoin.create({watchlist: watchlist1, ticker: holding3})
WatchlistJoin.create({watchlist: watchlist1, ticker: holding5})
WatchlistJoin.create({watchlist: watchlist1, ticker: holding6})
WatchlistJoin.create({watchlist: watchlist1, ticker: holding7})
