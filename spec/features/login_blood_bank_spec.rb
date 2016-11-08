require "rails_helper"

describe "Kátia poderá fazer login como banco de sangue", type: :feature, js: true do

  before(:all) do
    UserBloodBank.create(cnpj: '12345678912369', name: 'Carlos', email: 'huehue@gmail.com', password: '123456', password_confirmation: '123456', address: 'Vila Mata Gato', actived: true)
  end

  context "quando logar com dados corretos" do
    it "deve ser direcionado para página de necessidade de hospital" do
      visit "/"

      find("#login_hemocentro_button").click

      sleep 1

      page.fill_in 'user_blood_donator_document', with: '12345678912369'
      page.fill_in 'user_blood_donator_password', with: '123456'
      click_button 'Login'

      expect(page).to have_content 'Informe a quantidade necessária de doadores de sangue para cada tipo sanguíneo'
    end
  end


  context "quando logar com dados incorretos" do
    it "deve aparecer mensagem de login invalido" do
      visit "/"

      find("#login_hemocentro_button").click

      sleep 1

      page.fill_in 'user_blood_donator_document', with: '1233467891'
      page.fill_in 'user_blood_donator_password', with: '123456'
      click_button 'Login'

      expect(page).to have_content 'Login inválido'
    end
  end
end
