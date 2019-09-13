class AddPublishedAtColumnToEssays < ActiveRecord::Migration[5.2]
  def change
    add_column :essays, :published_at, :datetime, default: nil
  end
end
