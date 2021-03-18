class CreateTickers < ActiveRecord::Migration[5.2]
  def change
    create_table :tickers do |t|
      t.string :ticker, null: false
      t.string :company, null: false

      t.timestamps
    end

    add_index :tickers, :ticker, unique: true
    add_index :tickers, :company, unique: true
  end
end
