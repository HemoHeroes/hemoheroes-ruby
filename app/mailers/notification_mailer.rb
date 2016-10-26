class NotificationMailer < ApplicationMailer


  default from: 'aceleradora10@gmail.com'

  def send_email usuario
    @url  = 'https://snap-ci.com/aceleradora-TW/HemoHeroes/branch/master'
    mail(to: usuario.email,
    subject: 'Teste implementação',
    template_path: 'notification_mailer',
    template_name: 'welcome_email')
  end

  def check_able_to_donate(donator)
    difference_in_days = (DateTime.now.to_date - donator.last_donation).to_i
    if difference_in_days > 30
      return true
    end
    return false
  end

  def send_notification_to_admin(blood_bank)
    @url = 'http://hemoheroestw-staging.herokuapp.com/admin'
    @blood_bank_name = blood_bank.name
    mail(to: 'aceleradora10@gmail.com',
    subject: 'Validar cadastro de novo banco de sangue',
    template_path: 'notification_mailer',
    template_name: 'new_blood_bank_email')
  end

end
