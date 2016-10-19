class NotificationMailer < ApplicationMailer

  default from: 'aceleradora10@gmail.com'

  def send_email(blood_necessity)
    @blood_necessity = blood_necessity
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    mail(to: "aceleradora10@gmail.com",
         subject: 'Teste implementação',
         template_path: 'notification_mailer',
         template_name: 'welcome_email')
  end

  def get_donators
    user_blood_donators = UserBloodDonator.all

    user_blood_donators.each do |donator|
      if donator.notification
        if(last_donation < 30.day.ago)

        end
      end
    end

  end
end
