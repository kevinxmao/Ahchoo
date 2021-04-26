class CreateWatchlistJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_joins do |t|
      t.integer :watchlist_id, null: false
      t.integer :ticker_id, null: false

      t.timestamps
    end
  end
end
