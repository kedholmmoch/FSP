class CreateEssays < ActiveRecord::Migration[5.2]
  def change
    create_table :essays do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :user_id, null: false
      t.boolean :published, null: false, default: false
      t.boolean :featured, null: false, default: false
      t.string :summary
      t.string :image_url
      t.timestamps
    end

    add_index :essays, :user_id
    add_foreign_key :essays, :users

    add_index :essays, :title
  end
end
