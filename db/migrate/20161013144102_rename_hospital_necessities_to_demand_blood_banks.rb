class RenameHospitalNecessitiesToDemandBloodBanks < ActiveRecord::Migration[5.0]
  def change
    rename_table :demand_blood_banks, :demand_blood_banks
  end
end
