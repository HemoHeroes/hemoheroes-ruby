class NotificationMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    @url  = 'http://example.com/login'
    #mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    mail(to: "aceleradora10@gmail.com", subject: 'Teste implementação')
  end
end
