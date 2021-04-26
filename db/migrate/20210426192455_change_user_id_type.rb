class ChangeUserIdType < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlists, :user_id
    add_column :watchlists, :user_id, :integer, null: false
  end
end
