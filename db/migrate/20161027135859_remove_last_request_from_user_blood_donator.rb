class RemoveLastRequestFromUserBloodDonator < ActiveRecord::Migration[5.0]
  def change
    remove_column :user_blood_donators, :last_request, :date
  end
end
