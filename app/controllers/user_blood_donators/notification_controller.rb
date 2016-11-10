class UserBloodDonators::NotificationsController < Devise::NotificationsController
  def actived_notification
    redirect_to root_path, flash: { receive_notification_modal: true }
  end
end
