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


  def send_email_to_donators(demand)
    cont = 0
    @donators = UserBloodDonator.all
    @donators.each do |donator|
    end
  end

  def check_able_to_donate(donator)
    difference_in_days = (DateTime.now.to_date - donator.last_donation).to_i
    if difference_in_days > 30
      return true
    end
    return false
  end


end
