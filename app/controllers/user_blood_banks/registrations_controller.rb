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
    puts "To na controller";

    if u.nil?
      build_resource(sign_up_params)
      puts "Primeiro IF";
      if resource.save
        puts "Segundo IF";
        send_new_hospital_email resource
      end
    else
      puts "Else";
      redirect_to new_user_blood_bank_registration_path, alert:"Email já cadastrado."
    end
    puts "The end";
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
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :name, :phone, :extension, :cnpj, :address])
  end

  def after_sign_up_path_for(resource)
    sign_out
  end

  def send_new_hospital_email bank
    @bank = bank
    NotificationMailer.send_notification_to_admin(@bank).deliver_now
  end

end
