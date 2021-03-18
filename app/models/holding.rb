# == Schema Information
#
# Table name: holdings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  ticker_id  :integer          not null
#  quantity   :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  avg_price  :float
#
class Holding < ApplicationRecord
    validates :user_id, :ticker_id, :quantity, :avg_price, presence: true
    validates :ticker_id, uniqueness: {scope: :user_id}

    belongs_to :user
    belongs_to :ticker
end
