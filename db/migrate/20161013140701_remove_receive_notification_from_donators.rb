class RemoveReceiveNotificationFromDonators < ActiveRecord::Migration[5.0]
  def change
    remove_column :donators, :receive_notification, :boolean
  end
end
