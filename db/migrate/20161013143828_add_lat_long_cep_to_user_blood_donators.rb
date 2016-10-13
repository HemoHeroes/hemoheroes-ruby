class AddLatLongCepToUserBloodDonators < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_donators, :lat, :string
    add_column :user_blood_donators, :long, :string
    add_column :user_blood_donators, :cep, :string
  end
end
