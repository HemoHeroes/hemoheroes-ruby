class AddLatitudeLongitudeToUserBloodBank < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_banks, :latitude, :float
    add_column :user_blood_banks, :longitude, :float
  end
end
