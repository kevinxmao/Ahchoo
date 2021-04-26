class AddIndexWatchlistJoins < ActiveRecord::Migration[5.2]
  def change
    add_index :watchlist_joins, [:watchlist_id, :ticker_id], unique: true
  end
end
