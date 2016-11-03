class FixLatLongFromUserBloodBank < ActiveRecord::Migration[5.0]
  def change
    rename_column :user_blood_banks, :lat, :latitude
    rename_column :user_blood_banks, :long, :longitude
  end
end
