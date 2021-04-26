class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.string :name, null: false
      t.string :user_id, null: false

      t.timestamps
    end
    add_index :watchlists, [:name, :user_id], unique: true
  end
end
