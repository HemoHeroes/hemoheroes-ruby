class RemoveStreetDistricNumberCityStateCepFromDonators < ActiveRecord::Migration[5.0]
  def change
    remove_column :donators, :street, :string
    remove_column :donators, :district, :string
    remove_column :donators, :number, :string
    remove_column :donators, :state, :string
    remove_column :donators, :cep, :string
  end
end
