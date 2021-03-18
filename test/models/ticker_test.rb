# == Schema Information
#
# Table name: tickers
#
#  id         :bigint           not null, primary key
#  ticker     :string           not null
#  company    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class TickerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
