class AddLastDonationTokenToUserBloodDonator < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_donators, :last_donation_token, :string
  end
end
