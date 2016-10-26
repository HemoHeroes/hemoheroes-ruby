class NotificationMailer < ApplicationMailer


  default from: 'aceleradora10@gmail.com'

  def send_email user
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    mail(to: user.email,
    subject: 'Teste implementação',
    template_path: 'notification_mailer',
    template_name: 'welcome_email')
  end

end
