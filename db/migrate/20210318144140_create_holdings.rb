class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    create_table :holdings do |t|
      t.integer :user_id, null: false
      t.integer :ticker_id, null: false
      t.float :quantity, null: false
      t.float :avg_price, null: false

      t.timestamps
    end
    add_index :holdings, [:user_id, :ticker_id], unique: true
  end
end
