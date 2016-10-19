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

    if (@user == nil)
      redirect_to root_path , alert:"Documento inválido", flash: { manifesto_modal: true }
    else
      if @user.valid_password?(senha)
        sign_in(@user)
        redirect_to dashboard_path, alert: "#{@user.name} tá na área!"
      else
        redirect_to root_path , alert:"Senha inválida", flash: { manifesto_modal: true }
      end
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
