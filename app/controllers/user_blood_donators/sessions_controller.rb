class UserBloodDonators::SessionsController < Devise::SessionsController
    before_action :configure_sign_in_params, only: [:create]

    # POST /resource/sign_in
    def create
        puts params.inspect
        super
    end

    protected
    
    # If you have extra params to permit, append them to the sanitizer.
    def configure_sign_in_params
      devise_parameter_sanitizer.permit(:sign_in, keys: [:cpf])
    end
end
