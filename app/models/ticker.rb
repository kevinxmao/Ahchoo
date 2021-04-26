# == Schema Information
#
# Table name: tickers
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  company    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Ticker < ApplicationRecord
    validates :ticker, :company, presence: true, uniqueness: true
    
    has_many :holdings

    has_many :holders, through: :holdings, source: :user

    has_many :watchlist_joins

    has_many :watchlists, through: :watchlist_joins, source: :watchlist
end
