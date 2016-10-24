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
    @donators = UserBloodDonator.all
    @donators.each do |donator|
      puts("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      puts(check_able_to_donate(donator))
    end
  end

  def check_able_to_donate(donator)
    return difference_in_days = (donator.last_donation - DateTime.now.to_date).to_i
    # if donator.genre == "masculino"
    #
    # else
    #
    # end
  end

end
