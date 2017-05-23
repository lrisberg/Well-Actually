class AddTagsToSources < ActiveRecord::Migration[5.1]
  def change
    change_table :sources do |t|
      t.text :tags, array: true, default: []
    end
  end
end
