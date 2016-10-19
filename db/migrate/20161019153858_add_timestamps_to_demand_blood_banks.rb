class AddTimestampsToDemandBloodBanks < ActiveRecord::Migration[5.0]
  def change
    add_column :demand_blood_banks, :created_at, :datetime
    add_column :demand_blood_banks, :updated_at, :datetime
  end
end
