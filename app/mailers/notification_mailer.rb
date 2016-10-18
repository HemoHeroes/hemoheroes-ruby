class NotificationMailer < ApplicationMailer

  default from: 'aceleradora10@gmail.com'

  def send_email(blood_necessity)
    @blood_necessity = blood_necessity
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    #mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    mail(to: "aceleradora10@gmail.com", subject: 'Teste implementação')
  end
end
