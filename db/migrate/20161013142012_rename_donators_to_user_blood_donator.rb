class RenameDonatorsToUserBloodDonator < ActiveRecord::Migration[5.0]
  def change
    rename_table :donators, :user_blood_donators
  end
end
