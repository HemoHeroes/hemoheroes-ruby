class RemoveCityFromDonators < ActiveRecord::Migration[5.0]
  def change
    remove_column :donators, :city, :string
  end
end
