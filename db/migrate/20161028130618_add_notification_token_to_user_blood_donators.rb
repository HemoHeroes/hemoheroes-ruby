class AddNotificationTokenToUserBloodDonators < ActiveRecord::Migration[5.0]
  def change
    add_column :user_blood_donators, :notification_token, :string
  end
end
