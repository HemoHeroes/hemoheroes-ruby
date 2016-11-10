class ChangeNotificationFromUserBloodDonator < ActiveRecord::Migration[5.0]
  def change
    change_column_default :user_blood_donators, :notification, false
  end
end
