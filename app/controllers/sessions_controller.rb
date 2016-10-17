class SessionsController < Devise::SessionsController

  def new
    super
  end

  def create
    @user = get_document_type params

    if @user.valid_password?(params[:user_blood_donator][:password])
      sign_in(@user)
      redirect_to dashboard_path, alert: "#{@user.name} tá na área!"
    else
      redirect_to new_user_blood_donator_session_path, alert: "Dados invalidos!"
    end
  end

  private

  def get_document_type(params)
    user = nil
    if params[:documento].length == 11
      puts "user"
      user = UserBloodDonator.find_for_authentication(cpf: params[:documento])
    elsif params[:documento].length == 14
      puts "admin"
      user = UserBloodBank.find_for_authentication(cnpj: params[:documento])
    end
  end

end
