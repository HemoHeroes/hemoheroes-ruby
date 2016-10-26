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
    super
    blood_bank = UserBloodBank.last
    NotificationMailer.send_notification_to_admin blood_bank
    if UserBloodBank.find_for_authentication(cnpj: params[:document])
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
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

    # If you have extra params to permit, append them to the sanitizer.
    # def configure_account_update_params
    #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
    # end

    # The path used after sign up.
    def after_sign_up_path_for(resource)
      sign_out
      root_path
    end
    #
    # # The path used after sign up for inactive accounts.
    # def after_inactive_sign_up_path_for(resource)
    #   signed_in_root_path(resource)
    # end
  end
