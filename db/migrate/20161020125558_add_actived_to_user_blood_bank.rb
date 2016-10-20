class AddActivedToUserBloodBank < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_banks, :actived, :boolean, default: false
  end
end
