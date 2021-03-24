# json.users do
#     json.set! user.id do
#         json.extract! user, :id, :email, :first_name, :last_name, :funds
#     end
# end

json.extract! user, :id, :email, :first_name, :last_name, :funds

json.holdings do 
    user.holdings.each do |holding|
        json.set! holding.id do
            json.extract! holding, :id, :ticker_id, :user_id, :quantity, :avg_price
            json.extract! holding.ticker, :ticker
        end
    end
end