class RemoveLatLongFromUserBloodBank < ActiveRecord::Migration[5.0]
  def change
    remove_column :user_blood_banks, :latitude, :string
    remove_column :user_blood_banks, :longitude, :string
  end
end
