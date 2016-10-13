class RemoveStreetCepDistrictNumberCityStateFromUserBloodBanks < ActiveRecord::Migration[5.0]
  def change
    remove_column :user_blood_banks, :street, :string
    remove_column :user_blood_banks, :cep, :string
    remove_column :user_blood_banks, :district, :string
    remove_column :user_blood_banks, :number, :string
    remove_column :user_blood_banks, :city, :string
    remove_column :user_blood_banks, :state, :string
  end
end
