class RenameHospitalToUserBloodBank < ActiveRecord::Migration[5.0]
  def change
      rename_table :hospitals, :user_blood_banks
  end
end
