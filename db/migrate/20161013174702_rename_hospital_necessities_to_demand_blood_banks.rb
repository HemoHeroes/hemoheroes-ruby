class RenameHospitalNecessitiesToDemandBloodBanks < ActiveRecord::Migration[5.0]
  def change
    rename_table :hospital_necessities, :demand_blood_banks
end
