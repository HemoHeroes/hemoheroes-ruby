require "rails_helper"

describe "Kátia poderá criar conta de banco de sangue", type: :feature, js: true do
  context "Quando cadastrar com dados corretos" do

    it "deve ativar o botao" do
      visit "/cadastroBanco"
      within("#new_user_blood_bank") do
        fill_in "user_blood_bank_name", with: "Hospital São Lucas"
        page.find('#user_blood_bank_name').trigger(:focusout)
        fill_in "user_blood_bank_cnpj", with: "12345678912345"
        page.find('#user_blood_bank_cnpj').trigger(:focusout)
        fill_in "user_blood_bank_email", with: "katia@gmail.com"
        page.find('#user_blood_bank_email').trigger(:focusout)
        fill_in "user_blood_bank_phone", with: "5196501068"
        page.find('#user_blood_bank_phone').trigger(:focusout)
        fill_in "user_blood_bank_address", with: "Av. Ipiranga, 6681"
        page.find('#user_blood_bank_address').trigger(:focusout)
        fill_in "user_blood_bank_password", with: "123456"
        page.find('#user_blood_bank_password').trigger(:focusout)
        fill_in "user_blood_bank_password_confirmation", with: "123456"
        page.find('#user_blood_bank_password_confirmation').trigger(:focusout)
      end

      sleep 1
      expect(page).to have_button(class: "is-actived")
    end
  end


  context "Quando cadastrar com dados incorretos" do
    it "deve manter o botao desabilitado" do
      visit "/cadastroBanco"
      within("#new_user_blood_bank") do
        fill_in "user_blood_bank_name", with: "Hospital São Lucas"
        page.find('#user_blood_bank_name').trigger(:focusout)
        fill_in "user_blood_bank_cnpj", with: "12345678912345"
        page.find('#user_blood_bank_cnpj').trigger(:focusout)
        fill_in "user_blood_bank_email", with: "katiagmail.com"
        page.find('#user_blood_bank_email').trigger(:focusout)
        fill_in "user_blood_bank_phone", with: "5196501068"
        page.find('#user_blood_bank_phone').trigger(:focusout)
        fill_in "user_blood_bank_address", with: "Av. Ipiranga, 6681"
        page.find('#user_blood_bank_address').trigger(:focusout)
        fill_in "user_blood_bank_password", with: "123456"
        page.find('#user_blood_bank_password').trigger(:focusout)
        fill_in "user_blood_bank_password_confirmation", with: "123456"
        page.find('#user_blood_bank_password_confirmation').trigger(:focusout)
      end

      sleep 1
      expect(page).to have_button(class: "is-disabled")
    end
  end

  context "Quando clicar em cadastrar" do
    it "avisar sobre cadastro em analise" do
      visit "/cadastroBanco"
      within("#new_user_blood_bank") do
        fill_in "user_blood_bank_name", with: "Hospital Don Vicente"
        page.find('#user_blood_bank_name').trigger(:focusout)
        fill_in "user_blood_bank_cnpj", with: "18845678912345"
        page.find('#user_blood_bank_cnpj').trigger(:focusout)
        fill_in "user_blood_bank_email", with: "donvicente@gmail.com"
        page.find('#user_blood_bank_email').trigger(:focusout)
        fill_in "user_blood_bank_phone", with: "5188998899"
        page.find('#user_blood_bank_phone').trigger(:focusout)
        fill_in "user_blood_bank_address", with: "Av. Paulista, 6681"
        page.find('#user_blood_bank_address').trigger(:focusout)
        fill_in "user_blood_bank_password", with: "123456"
        page.find('#user_blood_bank_password').trigger(:focusout)
        fill_in "user_blood_bank_password_confirmation", with: "123456"
        page.find('#user_blood_bank_password_confirmation').trigger(:focusout)

        find(".is-actived").trigger('click')
      end

      sleep 1
      expect(page).to have_css(".js-modalMessageRegisterBank")
    end
  end

end
