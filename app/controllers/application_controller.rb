class ApplicationController < ActionController::Base
  def index
    @banks = UserBloodBank.where(actived:true)
    send_no_blood_type
  end


  def send_no_blood_type
    @donators = UserBloodDonator.where(blood_type:"", notification:true)
    @donators.each do |donator|
      if(check_donation_interval(donator))
        donator.notification_token = SecureRandom.urlsafe_base64.to_s
        donator.save!
        NotificationMailer.send_email_no_blood_type_donator(donator).deliver_now
        Notification.create! :last_notification => Date.current,
        :appear => false,
        :user_blood_donators_id => donator.id
      end
    end
  end

  def check_donation_interval donator
    notification = Notification.where(user_blood_donators_id:donator.id).last
    if notification.nil?
      return true
    end
    difference = (Date.current - notification.last_notification).to_i
    if difference >= 1
      return true
    end
    return false
  end




end
