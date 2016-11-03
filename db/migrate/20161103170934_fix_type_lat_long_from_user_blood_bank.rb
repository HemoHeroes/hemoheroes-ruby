class FixTypeLatLongFromUserBloodBank < ActiveRecord::Migration[5.0]
  def change
    change_column :user_blood_banks, :latitude, :float
    change_column :user_blood_banks, :longitude, :float
  end
end
