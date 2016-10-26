class NotificationMailer < ApplicationMailer


  default from: 'aceleradora10@gmail.com'

  def send_email user
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    mail(to: user.email,
    subject: 'Teste implementação',
    template_path: 'notification_mailer',
    template_name: 'welcome_email')
  end

  def send_notification_to_admin blood_bank
    @url = 'http://hemoheroestw-staging.herokuapp.com/admin'
    @blood_bank_name = blood_bank.name
    mail(to: 'aceleradora10@gmail.com',
    subject: 'Validar cadastro de novo banco de sangue',
    template_path: 'notification_mailer',
    template_name: 'new_blood_bank_email')
  end

end
