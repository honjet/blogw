class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.text :body, null: false
      t.boolean :draft, null: false, default: false
      t.datetime :published_at

      t.timestamps
    end
  end
end
