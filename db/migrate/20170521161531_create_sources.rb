class CreateSources < ActiveRecord::Migration[5.1]
  def change
    create_table :sources do |t|
      t.integer :user_id
      t.text :title
      t.text :link
      t.string :journal
      t.text :abstract
      t.text :notes
      t.integer :wins
      
      t.timestamps
    end
  end
end
