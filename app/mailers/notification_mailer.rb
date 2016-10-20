class NotificationMailer < ApplicationMailer


  default from: 'aceleradora10@gmail.com'

  def send_email
    @usuario = UserBloodDonator.last
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    mail(to: @usuario.email,
    subject: 'Teste implementação',
    template_path: 'notification_mailer',
    template_name: 'welcome_email')
  end


end
