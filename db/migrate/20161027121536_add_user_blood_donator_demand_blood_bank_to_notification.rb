class AddUserBloodDonatorDemandBloodBankToNotification < ActiveRecord::Migration[5.0]
  def change
    add_reference :notifications, :user_blood_donators, foreign_key: true
    add_reference :notifications, :demand_blood_banks, foreign_key: true
  end
end
