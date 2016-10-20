class NotificationMailer < ApplicationMailer

  default from: 'aceleradora10@gmail.com'

  def send_email(blood_necessity)
    @blood_necessity = blood_necessity
    @usuario = UserBloodDonator.first
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    mail(to: @usuario.email,
         subject: 'Teste implementação',
         template_path: 'notification_mailer',
         template_name: 'welcome_email')
  end

  def get_donators
    user_blood_donators = UserBloodDonator.all

    user_blood_donators.each do |donator|
      if donator.notification
        if(Date.current - last_donation < 30)
          puts "Pailindo"

        end
      end
    end

  end
end
