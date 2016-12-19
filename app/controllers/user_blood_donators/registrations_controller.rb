
class UserBloodDonators::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]


  # POST /resource
  def create
    u = UserBloodDonator.find_by(email:params["user_blood_donator"]["email"].downcase)
    if u.nil?
      build_resource(sign_up_params)
      if resource.save
        send_welcome_email
        redirect_to root_path, flash: { notification_modal: true, message:"Agora você poderá ser notificado por e-mail pelos bancos de sangue e poderá também verificar os locais para fazer sua doação.", title:"Cadastro realizado com sucesso!", link: true}
      end
    else
      redirect_to root_path, alert:"E-mail já cadastrado. Por favor, preencha o campo com outro e-mail.", flash: { register_modal: true }
    end


  end

  def made_donation
    donator = UserBloodDonator.find_by last_donation_token:params['receiveToken']
    if donator != nil
      id_donator = donator.update_last_donation
    end
    redirect_to root_path, flash: { made_modal: true, message:"O motivo de sua doação foi um email de solicitação que você recebeu após se cadastrar no HemoHeroes?", title:"Por favor, responda", id_donator: id_donator }
  end

  def feedback_donation
    donator = UserBloodDonator.find_by id:params['token_feedback']
    if donator != nil
      donator.add_use_hemoheroes
    end
    redirect_to root_path, flash: { notification_modal: true, message:"Obrigado pela sua contribuição.", title:"Equipe HemoHeroes" }
  end

  def sign_up_confirmation
    donator = UserBloodDonator.find_by( notification_token: params['token'])
    if donator != nil
      donator.notification = false
      donator.save!
      donator.notification_token = ""
      donator.save!
    end

    redirect_to root_path, flash: { notification_modal: true, message:"Obrigado por fazer parte da comunidade HemoHeroes", title:"Sua conta foi criada com sucesso" }
  end

  def cancel_notification
    donator = UserBloodDonator.find_by( notification_token: params['token'])
    if donator
      donator.notification = false
      donator.save!
      donator.notification_token = ""
      donator.save!
    end

    redirect_to root_path, flash: { notification_modal: true, message:"A partir de agora você não receberá mais nenhum email de solicitação do HemoHeroes.  Você poderá voltar a receber notificações, clicando na opção 'receber notificações' e inserindo seu email no rodapé do site", title:"Notificação Cancelada" }
  end

  def active_notification
    donator = UserBloodDonator.find_by(email: params['user_blood_donator_email_notification'].downcase)

    if donator != nil
      donator.notification = true
      donator.save!
      # puts donator.notification
      redirect_to root_path, flash: { confirmation_notification_modal: true }
    else
      redirect_to root_path, alert:"Você precisa ser cadastrado para receber notificações do HemoHeroes", flash: { set_focus:"autofocus", register_modal: true , email: params['user_blood_donator_email_notification'].downcase}
      # redirect_to root_path, flash: { register_modal: true }
    end

  end


  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :name, :genre, :blood_type])
  end

  def after_sign_up_path_for_modal(resource)
    sign_out
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
