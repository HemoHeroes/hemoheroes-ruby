class AddPhoneLatLongAddressExtensionToUserBloodBanks < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_banks, :phone, :string
    add_column :user_blood_banks, :lat, :string
    add_column :user_blood_banks, :long, :string
    add_column :user_blood_banks, :address, :string
    add_column :user_blood_banks, :extension, :string
  end
end
