class NotificationMailer < ApplicationMailer

  default from: 'aceleradora10@gmail.com'

  def welcome_email(user)
    puts("metodo welcome_email")
    @user = user
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    #mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    mail(to: "aceleradora10@gmail.com", subject: 'Teste implementação')
  end
end
