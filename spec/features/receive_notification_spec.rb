require "rails_helper"

describe "Antônio poderá solicitar receber notificações" do

  before(:all) do
    @user = UserBloodDonator.new :name => 'Bruna', :email => 'irlatrevisan@gmail.com', :password => '123456', :password_confirmation => '123456', :cpf => '12376858912', :blood_type => 'O+', :notification => false, :genre => 'f', :last_donation => DateTime.current - 100.days
  end

  context "quando inserir um email cadastrado" do

    it "deve passar a receber notificações de solicitação de sangue" do
      visit "/"

      find("#receive_notification_button").click

      sleep 1

      page.fill_in 'user_blood_donator_email', with: 'irlatrevisan@gmail.com'
      click_button 'Confirmar'

      expect(@user.notification).to eq(true)

    end
  end


  context "quando inserir um email não cadastrado" do

    it "deve abrir a modal de cadastro" do
      
      visit "/"

      find("#receive_notification_button").click

      sleep 1

      page.fill_in 'user_blood_donator_email', with: 'joao@joao.com'
      click_button 'Confirmar'

      expect(page).to have_content 'Cadastro de doador'

    end
  end
end
