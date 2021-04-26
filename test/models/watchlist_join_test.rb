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
require 'test_helper'

class WatchlistJoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
