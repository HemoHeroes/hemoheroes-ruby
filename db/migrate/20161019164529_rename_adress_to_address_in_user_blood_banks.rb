class RenameAdressToAddressInUserBloodBanks < ActiveRecord::Migration[5.0]
  def change
    rename_column :user_blood_banks, :adress, :address
  end
end
