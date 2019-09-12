# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_name    :string
#  profile_blurb   :string
#  twitter_url     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
