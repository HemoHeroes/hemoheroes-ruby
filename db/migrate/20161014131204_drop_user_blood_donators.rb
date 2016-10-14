class DropUserBloodDonators < ActiveRecord::Migration[5.0]
  def change
    drop_table :user_blood_donators
  end
end
