# == Schema Information
#
# Table name: essays
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  body         :text             not null
#  user_id      :integer          not null
#  published    :boolean          default(FALSE), not null
#  featured     :boolean          default(FALSE), not null
#  summary      :string
#  image_url    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  published_at :datetime
#

class Essay < ApplicationRecord
  validates :title, :body, :user_id, presence: true
  validates :published, :featured, inclusion: { in: [true, false] }


  belongs_to :author,
  class_name: 'User',
  primary_key: :id,
  foreign_key: :user_id


  def minutes_to_read
    word_count = self.body.split(" ").length
    return (word_count / 200) + 1
  end

  def publish
    self.published = true
    self.published_at = Time.current
  end

  def unpublish
    self.published = false
    self.published_at = nil
  end

  def feature
    self.featured = true if self.published
  end

  def unfeature
    self.featured = false
  end

  def self.all_featured
    Essay.where(featured: true)
  end

  def self.all_published
    Essay.where(published: true)
  end

  ## For testing Feed state load and ajax requests
  def self.all_unpublished
    Essay.where(published: false)
  end

end
