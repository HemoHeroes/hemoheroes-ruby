class ApplicationController < ActionController::Base
  def index
    @banks = UserBloodBank.where(actived:true)
    send_no_blood_type
  end


  def send_no_blood_type
    @donators = UserBloodDonator.all
    @donators.each do |donator|
      if(donator.blood_type == "" && check_donation_interval(donator))
        NotificationMailer.send_email_no_blood_type_donator(donator).deliver_now
      end
    end
  end

  def check_donation_interval donator
    notification = Notification.find_by(user_blood_donators_id: donator.id)
    if notification == nil
      return true
    end
    difference = (Date.current - notification.last_notification).to_i
    if difference > 1
      return true
    end
    return false
  end

end
