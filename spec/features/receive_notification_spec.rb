require "rails_helper"

describe "Antônio poderá solicitar receber notificações" do

  before(:all) do
    @user = UserBloodDonator.create(:name => 'Bruna', :email => 'irlatrevisan2@gmail.com', :notification => false)
  end

  context "quando inserir um email cadastrado" do

    it "deve passar a receber notificações de solicitação de sangue" do
      visit "/"

      find("#receive_notification_button").click

      sleep 1

      page.fill_in 'user_blood_donator_email_notification', with: 'irlatrevisan2@gmail.com'
      click_button 'Confirmar'

      # expect(page).to have_content ''
      # expect(@user.name).to eq('Bruna')
      expect(page).to have_field("user_blood_donator_email_notification", value: 'irlatrevisan@gmail.com')

    end
  end


  context "quando inserir um email não cadastrado" do

    it "deve abrir a modal de cadastro" do

      visit "/"

      find("#receive_notification_button").click

      sleep 1

      page.fill_in 'user_blood_donator_email_notification', with: 'joao@joao.com'
      click_button 'Confirmar'

      expect(page).to have_content 'Cadastro de doador'

    end
  end
end
