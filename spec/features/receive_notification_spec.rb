require "rails_helper"

describe "Antônio poderá solicitar receber notificações" do

  before(:all) do
    @user = UserBloodDonator.new(:name => 'Bruna', :email => 'irlatrevisan20@gmail.com', :notification => false)
  end

  context "quando inserir um email cadastrado" do
    it "deve passar a receber notificações de solicitação de sangue" do
      visit "/"
      find("#receive_notification_button").click
      sleep 1
      page.fill_in 'user_blood_donator_email_notification', with: 'irlatrevisan20@gmail.com'
      click_button 'confirmar'

      sleep 1
      expect(@user.notification) == true
    end
  end


  context "quando inserir um email não cadastrado" do
    it "deve abrir a modal de cadastro" do
      visit "/"
      find("#receive_notification_button").click
      sleep 1
      page.fill_in 'user_blood_donator_email_notification', with: 'joao@joao.com'
      click_button 'confirmar'

      sleep 1
      expect(page).to have_content 'Cadastro de doador'
    end
  end
end
