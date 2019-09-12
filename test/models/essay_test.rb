# == Schema Information
#
# Table name: essays
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  published  :boolean          default(FALSE), not null
#  featured   :boolean          default(FALSE), not null
#  summary    :string
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class EssayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
