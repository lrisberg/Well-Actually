class AddBioAndUsernameToUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.string :username
      t.text :bio
      t. string :photo
    end
  end
end
