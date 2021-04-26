# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  ticker_id  :integer          not null
#  quantity   :float            not null
#  avg_price  :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Holding < ApplicationRecord
    validates :user_id, :ticker_id, :quantity, :avg_price, presence: true
    validates :ticker_id, uniqueness: {scope: :user_id}

    belongs_to :user
    belongs_to :ticker

    def edit_holding(order)
        # order: {:user_id, :ticker_id, :quantity, :avg_price}
        new_quantity = order[:quantity].to_f + self.quantity
        new_total = self.quantity * self.avg_price + order[:quantity].to_f * order[:avg_price].to_f
        new_avg_price = new_total / new_quantity

        self.update_attributes :avg_price => new_avg_price, :quantity => new_quantity
    end
end
