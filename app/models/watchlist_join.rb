# == Schema Information
#
# Table name: watchlist_joins
#
#  id           :bigint           not null, primary key
#  watchlist_id :integer          not null
#  ticker_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class WatchlistJoin < ApplicationRecord
    validates :watchlist_id, :ticker_id, presence: true
    validates :ticker_id, uniqueness: {scope: :watchlist_id}

    belongs_to :watchlist
    belongs_to :ticker
end
