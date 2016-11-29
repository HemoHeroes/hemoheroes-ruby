class UserBloodBanks::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]


  # GET /resource/sign_up
  def new
    @resourceT = "blood-bank"
    super
  end

  # POST /resource
  def create

    u = UserBloodBank.find_by(email:params["user_blood_bank"]["email"])

    if u.nil?
      build_resource(sign_up_params)
      if resource.save
        send_new_hospital_email resource
      end
    else
      redirect_to new_user_blood_bank_registration_path, alert:"Email já cadastrado."
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  #   puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  #   puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  #   puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  #   puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  #   puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :name, :phone,
      :extension, :cnpj, :lat,
      :long, :address])
    end

    def after_sign_up_path_for(resource)
      sign_out
    end

    def send_new_hospital_email bank
      @bank = bank
      NotificationMailer.send_notification_to_admin(@bank).deliver_now
    end

  end
