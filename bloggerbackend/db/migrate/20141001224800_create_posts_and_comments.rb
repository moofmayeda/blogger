class CreatePostsAndComments < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.timestamps
    end

    create_table :comments do |t|
      t.text :text
      t.belongs_to :post
      t.timestamps
    end
  end
end
