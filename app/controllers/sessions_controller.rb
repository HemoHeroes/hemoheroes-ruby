class SessionsController < Devise::SessionsController

  def new
    super
  end

  def create
    @user = nil
    senha = get_param_password params

    @user = UserBloodDonator.find_for_authentication(cpf: params[:documento])

    if (@user == nil)
      @user = UserBloodBank.find_for_authentication(cnpj: params[:documento])
    end

    if @user.valid_password?(senha)
      sign_in(@user)
      redirect_to dashboard_path, alert: "#{@user.name} tá na área!"
    else
      redirect_to new_user_blood_donator_session_path, alert: "Dados invalidos!"
    end
  end

  private

  def get_param_password(params)
    if params.has_key?(:user_blood_donator)
      senha = params[:user_blood_donator][:password]
    else
      senha = params[:user_blood_bank][:password]
    end
  end
end
