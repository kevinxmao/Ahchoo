# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
class Watchlist < ApplicationRecord
    validates :name, :user_id, presence: true
    validates :name, uniqueness: {scope: :user_id}

    belongs_to :user

    has_many :watchlist_joins

    has_many :tickers, through: :watchlist_joins, source: :ticker
end
