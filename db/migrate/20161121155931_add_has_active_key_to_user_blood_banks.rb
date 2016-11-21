class AddHasActiveKeyToUserBloodBanks < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_banks, :has_active_key, :boolean, default: false
  end
end
