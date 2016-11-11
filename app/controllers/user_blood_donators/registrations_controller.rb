class UserBloodDonators::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  def new
    @resourceT = "blood-donator"
    super
  end

  def newPrototipo
    @resourceT = "blood_prototype"
    @user_blood_donator = UserBloodDonator.new
    render 'user_blood_donators/registrations/newPrototipo'
  end

  # POST /resource
  def create

    puts "@@@@@@@@@@@@@@@@@@@@@@"
    puts "@@@@@@@@@@@@@@@@@@@@@@"
    puts "@@@@@@@@@@@@@@@@@@@@@@"
    puts params.inspect
    puts "@@@@@@@@@@@@@@@@@@@@@@"
    puts "@@@@@@@@@@@@@@@@@@@@@@"
    puts "@@@@@@@@@@@@@@@@@@@@@@"


    super
    send_welcome_email
  end

  def made_donation
    donator = UserBloodDonator.find_by last_donation_token:params['receiveToken']
    id_donator = 0
    if donator != nil
      donator.last_donation = DateTime.current
      donator.last_donation_token = ""
      donator.save!
      id_donator = donator.id
    end

    redirect_to root_path, flash: { made_modal: true, message:"O motivo de sua doação foi um email de solicitação que você recebeu após se cadastrar no HemoHeroes?", title:"Por favor, responda", id_donator: id_donator }
  end

  def feedback_donation
    donator = UserBloodDonator.find_by id:params['token_feedback']
    if donator != nil
      if donator.use_hemoheroes == nil
        donator.use_hemoheroes = 1

      else
        donator.use_hemoheroes += 1
      end
      donator.save!
    end

    redirect_to root_path, flash: { notification_modal: true, message:"Obrigado pela sua contribuição.", title:"Equipe HemoHeroes" }
  end



  def cancel_notification
    donator = UserBloodDonator.find_by( notification_token: params['token'])
    if donator != nil
      donator.notification = false
      donator.notification_token = ""
      donator.save!
    end

    redirect_to root_path, flash: { notification_modal: true, message:"A partir de agora você não receberá mais nenhum email de solicitação do HemoHeroes.", title:"Notificação Cancelada" }
  end

  def active_notification
    donator = UserBloodDonator.find_by(email: params['user_blood_donator_email_notification'])

    if donator != nil
      donator.notification = true
      donator.save!
      # puts donator.notification
      redirect_to root_path, flash: { confirmation_notification_modal: true }

    else
      redirect_to root_path, flash: { register_modal: true }
    end

  end


  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :name, :cpf, :date_birth, :phone, :password, :notification, :genre, :accept_terms, :blood_type, :admin, :last_donation, :cep, :long, :lat, :last_donation_token, :notification_token])
  end

  def after_sign_up_path_for(resource)
    dashboard_path
  end


  protected

  def get_donators
    all_user_blood_donators = UserBloodDonator.all
  end

  def send_notification
    NotificationMailer.send_email.deliver_now
  end

  def send_welcome_email
    @user = UserBloodDonator.last
    NotificationMailer.send_email_new_user(@user).deliver_now
  end
end
